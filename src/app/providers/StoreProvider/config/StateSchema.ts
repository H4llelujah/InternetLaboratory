import { FormSchema } from "@/features/FeedbackForm/model/types/FormSchema";
import { createReduxStore } from "./Store";



export interface StateSchema {
    form: FormSchema;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
