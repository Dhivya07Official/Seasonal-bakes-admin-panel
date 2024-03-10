import ToasterService from "../../toaster.service";
import { createAxios } from "../../pages/api/index";

class PromotionApi {
    public toasterService = new ToasterService();

    public async getPromotions() {
        try {
            const { data } = await createAxios().get("/api/promotions");
            return data;
        } catch (error) {
            this.toasterService.info("Error Fetching Promotions");
        }
    }

    public async createPromotion(data: any) {
        try {
            const { data: res } = await createAxios().post("/api/promotions", data);
            return res;
        } catch (error) {
            this.toasterService.info("Error Creating Promotion");
        }
    }

    public async deletePromotion(id: string) {
        try {
            const { data: res } = await createAxios().delete(`/api/promotions/${id}`);
            return res;
        } catch (error) {
            this.toasterService.info("Error Deleting Promotion");
        }
    }

    public async updatePromotion(id: string, data: any) {
        try {
            const { data: res } = await createAxios().put(`/api/promotions/${id}`, data);
            return res;
        } catch (error) {
            this.toasterService.info("Error Updating Promotion");
        }
    }
}

export default PromotionApi;