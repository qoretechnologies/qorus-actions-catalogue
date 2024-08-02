export interface IQoreAppShared {
    display_name: string,
    short_desc: string,
    name: string,
    desc?: string,
}

export interface IQoreAppAction extends IQoreAppShared {
    app: string,
    action: string,
    action_code: 1 | 2,
    app_function?: (event?: Record<string, any>) => void
}

export interface IQoreApp {
    name: string,
    actions: IQoreAppAction[]
}


export interface IPrepareAllQore {
    actions: Record<string, Record<string, any>>
} 