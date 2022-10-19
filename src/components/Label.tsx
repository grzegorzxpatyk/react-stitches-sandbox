import { styled } from '../styles/stitches';
import * as LabelPrimitive from '@radix-ui/react-label';

const Label = styled(LabelPrimitive.Root, {
  fontSize: 15,
  fontWeight: 500,
  color: 'white',
  userSelect: 'none'
});

export default Label;
