import ToasterService from "../../toaster.service";
import { createAxios } from "../../pages/api/index";

class OfferApi {
    public toasterService = new ToasterService();

    public async getOffers() {
        try {
            const { data } = await createAxios().get("/api/offers");
            return data;
        } catch (error) {
            this.toasterService.info("Error Fetching Offers");
        }
    }

    public async createOffer(data: any) {
        try {
            const { data: res } = await createAxios().post("/api/offers", data);
            return res;
        } catch (error) {
            this.toasterService.info("Error Creating Offer");
        }
    }

    public async deleteOffer(id: string) {
        try {
            const { data: res } = await createAxios().delete(`/api/offers/${id}`);
            return res;
        } catch (error) {
            this.toasterService.info("Error Deleting Offer");
        }
    }

    public async updateOffer(id: string, data: any) {
        try {
            const { data: res } = await createAxios().put(`/api/offers/${id}`, data);
            return res;
        } catch (error) {
            this.toasterService.info("Error Updating Offer");
        }
    }
}

export default OfferApi;