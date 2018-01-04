 /**
  * Store for the data managment
  * @module Store
  */

export default {
    message: 'Hello world!',
    auth_data: '',
    profil_data: '',
    resp_header: '',
	ip: "http://localhost:4242",
    ipPhone: "http://192.168.1.15:4242",
	token: '',
    sessionId: '',
    txResult: '',
    fake: {
        users: [
            {
                id: 1,
                name: "fefef",
                url: "http://aurelienknaub.com/wp-content/uploads/2015/07/Aur%C3%A9lien.jpg",
                pending: false,
            },
        ],
        orgas: [
            {
                id: 1,
                name: "Arc",
                url: "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg",
            },
            {
                id: 2,
                name: "Train",
                url: "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg",
            },
            {
                id: 3,
                name: "Shop",
                url: "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg",
            },
            {
                id: 4,
                name: "Cheese",
                url: "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg",
            },
            {
                id: 5,
                name: "IamS3rdAM",
                url: "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg",
            },
            {
                id: 6,
                name: "Aurelien",
                url: "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg",
            },
        ],
        projects: [
            {
                id: 1,
                name: "Club de flutte",
                url: "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg",
            },
            {
                id: 2,
                name: "AssosCassos",
                url: "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg",
            },
            {
                id: 3,
                name: "Aviron Club",
                url: "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg",
            },
            {
                id: 4,
                name: "Machin truc",
                url: "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg",
            },
            {
                id: 5,
                name: "Gneeeeeh",
                url: "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg",
            },
        ],
    }
}