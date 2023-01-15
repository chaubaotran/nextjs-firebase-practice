import * as Yup from "yup";

export const TodoFormSchema = Yup.object().shape({
  description: Yup.string().required("Required"),
  completeDate: Yup.date().required("Required"),
});
