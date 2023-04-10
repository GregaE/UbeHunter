
import { WritableComputedRef, SetupContext, EmitsOptions } from 'vue';
//@ts-ignore
export default function <Props extends Record<string, unknown>, PropName extends keyof Props, CustomEmits extends EmitsOptions>(props: Props, context: SetupContext<CustomEmits>, propName: PropName): WritableComputedRef<Props[PropName]>{};