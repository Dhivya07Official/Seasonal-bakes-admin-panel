/* eslint-disable @next/next/no-img-element */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ItemApi from "../api/item.api";
import ToasterService from "../../toaster.service";
const AddItemForm = () => {
  const toasterSerive = new ToasterService();
  const itemApi = new ItemApi();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await itemApi.postItems(data);
      if (res !== null) {
        toasterSerive.info("created Items");
      }
      else{
        toasterSerive.info("Error Creating Item");
      }
      reset();

      // Show success message or redirect to another page
    } catch (error) {
      toasterSerive.info("Error Creating Items");
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mr-10 flex flex-col bg-red-100">
        <label className="mb-4" htmlFor="food_name">
          Food Name
        </label>
        <input
          {...register("food_name", { required: true })}
          id="food_name"
          name="food_name"
          className="w-[30rem] input h-9 border-2  px-5 mb-2"
          type="text"
        />
        {errors.food_name && (
          <small className="text-danger mb-6">Food Name is Required</small>
        )}
      </div>
      <div className="mr-10 flex flex-col">
        <label className="mb-4" htmlFor="category">
          Category
        </label>
        <input
          {...register("category", { required: true })}
          id="category"
          name="category"
          className="w-[30rem] input h-9 border-2  px-5 mb-2"
          type="text"
        />
        {errors.category && (
          <small className="text-danger mb-6">Category is Required</small>
        )}
      </div>
      <div className="mr-10 flex flex-col">
        <label className="mb-4" htmlFor="cover_photo">
          Cover Photo
        </label>
        <input
          {...register("cover_photo", { required: true })}
          id="cover_photo"
          name="cover_photo"
          className="w-[30rem] input h-9 border-2  px-5 mb-2"
          type="text"
        />
        {errors.cover_photo && (
          <small className="text-danger mb-6">Cover Photo is Required</small>
        )}
      </div>
      <div className="mr-10 flex flex-col">
        <label className="mb-4" htmlFor="price">
          Price
        </label>
        <input
          {...register("price", { required: true })}
          id="price"
          name="price"
          className="w-[30rem] input h-9 border-2  px-5 mb-2"
          type="text"
        />
        {errors.price && (
          <small className="text-danger mb-6">Price is Required</small>
        )}
      </div>
      <div className="mr-10 flex flex-col">
        <label className="mb-4" htmlFor="sale_price">
          Sale Price
        </label>
        <input
          {...register("sale_price", { required: true })}
          id="sale_price"
          name="sale_price"
          className="w-[30rem] input h-9 border-2  px-5 mb-2"
          type="text"
        />
        {errors.sale_price && (
          <small className="text-danger mb-6">Sale Price is Required</small>
        )}
      </div>
      <div className="mr-10 flex flex-col">
        <label className="mb-4" htmlFor="isActive">
          Is Active
        </label>
        <input
          {...register("isActive")}
          id="isActive"
          name="isActive"
          className="w-[30rem] input h-9 border-2  px-5 mb-2"
          type="checkbox"
        />
      </div>
      <div className="mr-10 flex flex-col">
        <label className="mb-4" htmlFor="isAvailable">
          Is Available
        </label>
        <input
          {...register("isAvailable")}
          id="isAvailable"
          name="isAvailable"
          className="w-[30rem] input h-9 border-2  px-5 mb-2"
          type="checkbox"
        />
      </div>
      <div className="mr-10 flex flex-col">
        <label className="mb-4" htmlFor="information">
          Information
        </label>
        <textarea
          {...register("information", { required: true })}
          id="information"
          name="information"
          rows={3}
          className="w-[30rem] input  border-2 p-5 mb-2"
        />
        {errors.information && (
          <small className="text-danger mb-6">Information is Required</small>
        )}
      </div>
      <div className="mr-10 flex flex-col">
        <label className="mb-4" htmlFor="sizes">
          Sizes
        </label>
        <input
          {...register("sizes")}
          id="sizes"
          name="sizes"
          className="w-[30rem] input h-9 border-2  px-5 mb-2"
          type="text"
        />
      </div>
      <div className="mr-10 flex flex-col">
        <label className="mb-4" htmlFor="photos">
          Photos
        </label>
        <input
          {...register("photos")}
          id="photos"
          name="photos"
          className="w-[30rem] input h-9 border-2  px-5 mb-2"
          type="text"
        />
      </div>
      <div className="mr-10">
        <button
          type="submit"
          className="pt-2 pl-4 pb-2 pr-4 text-white btn bg-[#d61820]"
        >
          Add Item
        </button>
      </div>
    </form>
  );
};

export default function AddItem() {
  // ...
  return (
    <div className="mb-8 py-4">
      <h1 className="flex-1 font-semibold text-xl mb-4">Add Item</h1>
      <AddItemForm />
    </div>
  );
}
