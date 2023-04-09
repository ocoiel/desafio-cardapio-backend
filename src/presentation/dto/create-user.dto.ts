import { z } from "zod";

export const createUserDTO = z.object({
  email: z.string(),
  password: z.string(),
});
