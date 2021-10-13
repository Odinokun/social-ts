export type PostType = {
    id: number,
    message: string,
    likes: number
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type MessageType = {
    id: number,
    message: string,
}

export type DialogType = {
    id: number,
    name: string,
}

export type DialogsPageType = {
    messages: Array<MessageType>,
    dialogs: Array<DialogType>
}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

const state:RootStateType = {
    profilePage: {
        posts: [
            {
                id: 1,
                message: "Hello world",
                likes: 10
            }, {
                id: 2,
                message: "Second message",
                likes: 0
            }, {
                id: 3,
                message: "Odinokun - React developer",
                likes: 5
            }
        ],
    },
    dialogsPage: {
        messages: [
            {
                id: 1,
                message: 'Hello! First message!'
            }, {
                id: 2,
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste labore laboriosam necessitatibus nemo, nostrum nulla officia soluta tenetur? Exercitationem, repellat."
            }, {
                id: 3,
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            }, {
                id: 4,
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste labore laboriosam necessitatibus nemo, nostrum nulla officia soluta tenetur? Exercitationem, repellat."
            }, {
                id: 5,
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            }, {
                id: 6,
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam animi beatae commodi doloremque in molestias necessitatibus numquam perspiciatis quasi. Doloremque et exercitationem omnis tempore. Adipisci architecto cupiditate distinctio fugiat harum id magnam modi, non qui recusandae, tempora unde voluptas?"
            }, {
                id: 7,
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            }, {
                id: 8,
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam animi beatae commodi doloremque in molestias necessitatibus numquam perspiciatis quasi. Doloremque et exercitationem omnis tempore. Adipisci architecto cupiditate distinctio fugiat harum id magnam modi, non qui recusandae, tempora unde voluptas?"
            }
        ],
        dialogs: [
            {
                id: 1,
                name: "Arnold"
            }, {
                id: 2,
                name: "Silvester"
            }, {
                id: 3,
                name: "Jan Clod"
            }, {
                id: 4,
                name: "Chuck"
            }, {
                id: 5,
                name: "Jackie"
            }, {
                id: 6,
                name: "Bruce"
            }
        ]
    }
}

export default state;
