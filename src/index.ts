// The config handler type. It has basic functionality as a crap object holder for testing.
let __h = {}
export class ConfigHandler {
    get o() {
        return __h
    }

    set o(newConfig: any) {
        __h = newConfig
    }

    public save() {
        // Nothing to save here.
    }
}
