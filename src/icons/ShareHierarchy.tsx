import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ShareHierarchy = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path d="M5.25 7.5C3.182 7.5 1.5 5.818 1.5 3.75S3.182 0 5.25 0 9 1.682 9 3.75 7.318 7.5 5.25 7.5zm0-6C4.009 1.5 3 2.509 3 3.75S4.009 6 5.25 6 7.5 4.991 7.5 3.75 6.491 1.5 5.25 1.5zM3 24a.747.747 0 01-.746-.675L1.571 16.5H.75a.75.75 0 01-.75-.75v-3C0 9.855 2.355 7.5 5.25 7.5s5.25 2.355 5.25 5.25v3a.75.75 0 01-.75.75h-.821l-.682 6.825A.748.748 0 017.5 24H3zm3.821-1.5l.682-6.825A.748.748 0 018.25 15H9v-2.25C9 10.682 7.318 9 5.25 9S1.5 10.682 1.5 12.75V15h.75c.387 0 .708.29.746.675l.683 6.825h3.142zM19.5 24c-.827 0-1.5-.673-1.5-1.5V21h-.75A2.252 2.252 0 0115 18.75V12h-2.25a.75.75 0 010-1.5H15V3.75a2.252 2.252 0 012.25-2.25H18c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-3c-.827 0-1.5-.673-1.5-1.5V3h-.75a.75.75 0 00-.75.75v6.75H18c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-3c-.827 0-1.5-.673-1.5-1.5V12h-1.5v6.75c0 .414.336.75.75.75H18c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-3zm0-1.5h3v-3h-3v3zm0-9h3v-3h-3v3zm0-9h3v-3h-3v3z" />
  );

export default ShareHierarchy;
