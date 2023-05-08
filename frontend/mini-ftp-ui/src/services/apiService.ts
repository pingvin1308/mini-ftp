export default class ApiService {
    private static instance: ApiService;
    private static readonly basePath = 'http://localhost:5062';

    private constructor() { }

    public static getInstance(): ApiService {
        if (!ApiService.instance) {
            ApiService.instance = new ApiService();
        }

        return ApiService.instance;
    }

    public async getFiles(): Promise<string[]> {
        const response = await fetch(`${ApiService.basePath}/files`);
        const json = await response.json();
        return json;
    }

    public async uploadFile(file: File): Promise<void> {
        const formData = new FormData();
        formData.append('file', file);
        await fetch(`${ApiService.basePath}/files`, {
            method: 'POST',
            body: formData
        });
    }
}