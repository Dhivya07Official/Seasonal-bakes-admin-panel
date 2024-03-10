import ToasterService from "../../toaster.service";
import { createAxios } from "../api/index";
class ItemApi {
  public toasterSerive = new ToasterService();
  public async getItems() {
    try {
      const { data } = await createAxios().get("/api/items");
      return data;
    } catch (error) {
      this.toasterSerive.info("Error Fetching Items");
    }
  }
  public async postItems(data: any) {
    try {
      const { data: res } = await createAxios().post("/api/items", data);
      return res;
    } catch (error) {
      this.toasterSerive.info("Error Creating Item");
    }
  }

  public async deleteItems(id: string) {
    try {
      const { data: res } = await createAxios().delete(`/api/items/${id}`);
      return res;
    } catch (error) {
      this.toasterSerive.info("Error Deleting Item");
    }
  }

  public async updateItems(id: string, data: any) {
    try {
      const { data: res } = await createAxios().put(`/api/items/${id}`, data);
      return res;
    } catch (error) {
      this.toasterSerive.info("Error Updating Item");
    }
  }
}
export default ItemApi;
