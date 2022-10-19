import { styled } from '../styles/stitches';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

export const Separator = styled(SeparatorPrimitive.Root, {
    backgroundColor: '$slateA11',
    '&[data-orientation=horizontal]': { height: 1, width: '100%' },
    '&[data-orientation=vertical]': { height: '100%', width: 1 },
});
