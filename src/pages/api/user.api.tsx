import ToasterService from "../../toaster.service";
import { createAxios } from "../../pages/api/index";

class UserApi {
    public toasterService = new ToasterService();

    public async getUsers() {
        try {
            const { data } = await createAxios().get("/api/users");
            return data;
        } catch (error) {
            this.toasterService.info("Error Fetching Users");
        }
    }

    public async createUser(data: any) {
        try {
            const { data: res } = await createAxios().post("/api/users", data);
            return res;
        } catch (error) {
            this.toasterService.info("Error Creating User");
        }
    }

    public async deleteUser(id: string) {
        try {
            const { data: res } = await createAxios().delete(`/api/users/${id}`);
            return res;
        } catch (error) {
            this.toasterService.info("Error Deleting User");
        }
    }

    public async updateUser(id: string, data: any) {
        try {
            const { data: res } = await createAxios().put(`/api/users/${id}`, data);
            return res;
        } catch (error) {
            this.toasterService.info("Error Updating User");
        }
    }
}

export default UserApi;