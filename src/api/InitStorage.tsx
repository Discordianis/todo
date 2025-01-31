import {IProjects} from "../interfaces/projects.tsx";

export const InitStorage: IProjects = {
    info: {
        1: {
            name: 'Добро пожаловать!',
            id: 1,
            status: 'fulfilled',
            creator: 'Аноним',
            tasks: {
                1: {
                    name: 'Моя геройская таска',
                    description: 'Описание таски',
                    id: 1,
                    number: '1',
                    work_time: '17 часов',
                    date_end: '29-01-2025',
                    status: 'Завершено',
                    priority: 'highest',
                    subtasks: {
                        1: {
                            name: 'Моя геройская таска',
                            description: 'Описание таски',
                            id: 1,
                            number: '1',
                            work_time: '17 часов',
                            date_end: '29-01-2025',
                            status: 'Завершено',
                            priority: 'highest',
                        }
                    },
                    comments: {
                        1: {
                            user: 'Аноним 2',
                            date_created: '17-01-2025',
                            text: 'Не знаю что и сказать',
                            id: 1,
                            replies: {
                                1: {
                                    user: 'Аноним 3',
                                    date_created: '18-01-2025',
                                    text: 'Не знаю что и сказать 2',
                                    id: 1,
                                    replies: {
                                        1: {
                                            user: 'Аноним 4',
                                            date_created: '20-01-2025',
                                            text: 'Не знаю что и сказать 3',
                                            id: 1,
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}