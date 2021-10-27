import forestImg from './forest.jpg'
import concertImg from './concert.jpg'
import model1Img from './model1.png'
import model2Img from './model2.png'

export const hollywoodStory = {
    name: 'My Hollywood story',
    id: '1',
    chapters: [
        {
            chapter: 'Chapter 1',
            id: '1.1',
            subtitle: 'Move in',
            dialogs: [ // a lot of shit here, a lot of dialogs etc. WHOLE PLOT
                {
                    id: '1.1.1',
                    stage: forestImg,
                    leftDialogPerson: model1Img,
                    rightDialogPerson: model2Img,
                    dialog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ',
                    answers: [
                        {
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                            nextId: '1.1.2'
                        },
                        {
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                            nextId: '1.1.3'
                        }

                    ],
                },
                {
                    id: '1.1.2',
                    stage: forestImg,
                    leftDialogPerson: model1Img,
                    rightDialogPerson: model2Img,
                    dialog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    answers: [
                        {
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                            nextId: '1.1.4'
                        },
                        {
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                            nextId: '1.1.4'
                        }

                    ],
                },
                {
                    id: '1.1.3',
                    stage: forestImg,
                    leftDialogPerson: model1Img,
                    rightDialogPerson: model2Img,
                    dialog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cone irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    prevId: '1.1.1.1',
                    answers: [
                        {
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                            nextId: '1.1.4'
                        },
                        {
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                            nextId: '1.1.4'
                        }

                    ],
                },
                {
                    id: '1.1.4',
                    stage: forestImg,
                    leftDialogPerson: model1Img,
                    rightDialogPerson: model2Img,
                    dialog: 'Lorem ipsggggtur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    prevId: '1.1.1.2',
                    answers: [
                        {
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                            nextId: '1.2.1'
                        },
                        {
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                            nextId: '1.2.1'
                        }

                    ],
                },
                // etc.. lot of dialogs probabbly
            ]
        },
        {
            chapter: 'Chapter 2',
            id: '1.2',
            subtitle: 'Move in',
            stage: forestImg,
            dialogs: [ // a lot of shit here, a lot of dialogs etc. WHOLE PLOT
                {
                    id: '1.2.1',
                    stage: concertImg,
                    leftDialogPerson: model1Img,
                    rightDialogPerson: model2Img,
                    dialog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est ',
                    keyAnswer: true,
                    answers: [
                        {
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                            nextId: '1.2.2'
                        },
                        {
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                            nextId: '1.2.3'
                        }

                    ],
                },
                {
                    id: '1.2.2',
                    stage: concertImg,
                    leftDialogPerson: model1Img,
                    rightDialogPerson: model2Img,
                    dialog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    answers: [
                        {
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                            nextId: '1.2.4'
                        },
                        {
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                            nextId: '1.2.4'
                        }

                    ],
                },
                {
                    id: '1.2.3',
                    stage: concertImg,
                    leftDialogPerson: model1Img,
                    rightDialogPerson: model2Img,
                    dialog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cone irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    prevId: '1.1.1.1',
                    answers: [
                        {
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                            nextId: '1.2.4'
                        },
                        {
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                            nextId: '1.2.4'
                        }

                    ],
                },
                {
                    id: '1.2.4',
                    stage: concertImg,
                    leftDialogPerson: model1Img,
                    rightDialogPerson: model2Img,
                    dialog: 'Lorem ipsggggtur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    prevId: '1.1.1.2',
                    answers: [
                        {
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                            nextId: '1.3.1'
                        },
                        {
                            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                            nextId: '1.3.1'
                        }

                    ],
                },
                // etc.. lot of dialogs probabbly
            ]
        },
    ]
}

// export const hollywoodStory = {
//     title: 'My Hollywood story',
//     id: '#1',
//     chapters: {
//         '#1.1': {
//             title: 'chapter 1 - welcome to',
//             dialogs: {
//                 '#1.1.1': {
//                     dialog: 'gitara siema',
//                     answers: [
//                         {
//                             answer: 'siema',
//                             nextId: '#1.1.2'
//                         },
//                         {
//                             answer: 'elo',
//                             nextId: '#1.1.3'
//                         },
//                     ]
//                 },
//                 '#1.1.2': {
//                     dialog: 'gitara siema 2',
//                     answers: [
//                         {
//                             answer: 'siema',
//                             nextId: '#1.1.2'
//                         },
//                         {
//                             answer: 'elo',
//                             nextId: '#1.1.3'
//                         },
//                     ]
//                 },
//                 '#1.1.3': {
//                     dialog: 'gitara siema 3',
//                     answers: [
//                         {
//                             answer: 'siema',
//                             nextId: '#1.1.2'
//                         },
//                         {
//                             answer: 'elo',
//                             nextId: '#1.1.3'
//                         },
//                     ]
//                 },
//             }
//         }

//     }
// }