import update from "react-addons-update";

const initialStore = {
    userData:
        { name: "Гик", email: 'geek@geekbrains.ru', phone: '+7 999 999 99 99' },
};

export default function profileReducer(store = initialStore) {
    return update(store, {
        userData: { $set: store.userData },
    });
    //return store.userData;
}