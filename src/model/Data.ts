export class API {
    private static inst: API;

    public static getInstance(): API {
        if (API.inst == null) API.inst = new API();
        return API.inst;
    }

    public cdt = 0;
    public cvft = 0;
    public words = ["apple", "penny", "table"];
    public results = 0;
}