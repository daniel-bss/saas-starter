import { z } from "zod";

export type ActionState = {
  error?: string;
  success?: string;
  [key: string]: any; // This allows for additional properties
};

type ValidatedActionFunction<S extends z.ZodType<any, any>, T> = (
  data: z.infer<S>,
  formData: FormData
) => Promise<T>;

export function validatedAction<S extends z.ZodType<any, any>, T>(
  schema: S,
  action: ValidatedActionFunction<S, T>
) {
  return async (prevState: ActionState, formData: FormData) => {
    const result = schema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
      console.log("MAOOOKKK");
      const error = result.error;
      console.log(error);

      return { error };
    }

    console.log(">>", result);

    return action(result.data, formData);
  };
}

/*
{
    "user": {
        "username": "admin",
        "full_name": "Admin ABC",
        "email": "admin@email.com",
        "password_changed_at": "0001-01-01T00:00:00Z",
        "created_at": "2025-11-22T18:34:41.721398Z"
    },
    "session_id": "effbb1c2-cecf-40ad-9ab8-95d0eed47e8c",
    "access_token": "v2.local.DzwewhVal25ITJDsvNCAqJpL8YfaQUwfY4JeKJZrA-UriYrlzQADf5GB6ktbRbnMhWBx4SZGxEzDnDdbr3CH2Qzkqs4lBFBOy8Su_7JunY4IlRKTZuzf_ljtUBi0Y91qZvbSwZSb3IbYlLA7DXF1IiachVfMADkfS60GLR9xUQ1Jf5Nw5pJ8PupTALfVocsRycVaAjSu7ctZkCSaK--3-eCTlgtCC6ESi9_i3KBLDwbA3VuFQGDyCCIkVxXdHwAU10mK_d4ZmT7ITUzX9MWN0jBmwblQPdEEAYDYAqD7fT2J-wEGIA.bnVsbA",
    "refresh_token": "v2.local.r_2xI_7HSajfzg2k2EeeN7yehEYe-vacByyzQ_wYm6MKe-MYVe_Et5k7aspAkB1hPUSHuklzdh1awDYxo3FEQUYaqbu_3bOu_Bra-V-SqeTKJnp65KWZE_Wqe_afOayrG22BkR8nPYPcsnMjKobg3KHk_kESXN9QUzgV8iFIPQvUiolCj1xo4eY_zcpCBpi_RhKgPE2-ApsynlfTvprW0P5-26KkuV0cxn3wT4YgT476SyI_BRnYNbtf5s53ARDwpilCtj12vvza1MX8GGAjIjLz6Y98zAqwfCL8Mz3s-XOeoI3dBg.bnVsbA",
    "access_token_expires_at": "2025-11-22T18:37:03.930806922Z",
    "refresh_token_expires_at": "2025-11-23T18:36:03.933643286Z"
}
*/
