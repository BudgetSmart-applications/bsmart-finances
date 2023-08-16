# Sample using Dexie.js
Two components are used to create a sample application using Dexie.js.
- FriendList.vue (a component that displays a list of friends)
- FriendForm.vue (a component that allows you to add a friend)

# Project setup

Open a terminal and run the following command:

```bash
npm create vue@latest
```

- Follow the prompts to setup a new vue 3 project.
- Change directories into the project folder.
- Run the following command to install Dexie.js

```bash
npm install dexie
```

## Create a new db.js file

Applications typically have one single Dexie instance declared as its own module. This is where you declare which tables you need and how each table shall be indexed. A Dexie instance is a singleton throughout the application - you do not need to create it on demand. Export the resulting db instance from your module so that components or other modules can use it to query or write to the database.

- Create a new folder named model in the src folder.
- Create a new file named db.js in the model folder.
- Add the following code to the db.js file.

```javascript
// import the Dexie library
import Dexie from 'dexie';
// create a new Dexie database
export const db = new Dexie('my-database-name');
```

To use the db.js file
- Open the component file in the src folder.
- Add the following code to the `script` section of the component file.

```javascript
// FriendList.vue
// import the db.js file
import { db } from './model/db';
```


## Create new table Friends

**version**: The version number of the database. This is used to open the database. If the version number is higher than the current version of the database, the `upgrade` event will be triggered. [version:Dexie](https://dexie.org/docs/Version/Version)

**stores**: An object that contains the tables and indexes of the database. [stores:Dexie](https://dexie.org/docs/Version/Version.stores())

- Add the following code to the db.js file.

```javascript
// db.js

db.version(1).stores({
    friends: '++id,name,age'
});
```

# Create two components


## FriendList.vue

- Create a new file named FriendList.vue in the src/components folder.
- Add the following code to the FriendList.vue file.

```html
<template>
    <div>
        <h1>Friend List</h1>
        <ul>
            <li v-for="friend in friends" :key="friend.id">
                {{friend.name}} - {{friend.age}}
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue';
import { db } from '../model/db';

export default {
    setup() {
        const friends = ref([]);

        db.friends.toArray().then((data) => {
            friends.value = data;
        });

        return {
            friends
        }
    }
}
</script>
```

## FriendAdder.vue

- Create a new file named FriendAdder.vue in the src/components folder.
- Add the following code to the FriendAdder.vue file.

```html
<template>
    <div>
        <h1>Add a Friend</h1>
        {{ status}}
        <form @submit.prevent="addFriend">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name">
            <label for="age">Age</label>
            <input type="number" id="age" v-model="age">
            <button>Add Friend</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import { db } from '../model/db';

export default {
    setup() {
        const name = ref('');
        const age = ref(21);
        const status = ref('');

        const addFriend = () => {
            db.friends.add({
                name: name.value,
                age: age.value
            });
        }

        return {
            name,
            age,
            addFriend
        }
    },
    async addFriend() {
        this.status = 'Adding friend...';
        await db.friends.add({
            name: this.name,
            age: this.age
        });
        this.status = 'Friend added!';
    } 
}
</script>
```
