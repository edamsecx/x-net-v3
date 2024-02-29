import { createHash } from "crypto";

export function MD6(input: string) {
    return createHash("md5").update(createHash("md5").update(input).digest("hex")).digest("hex");
}