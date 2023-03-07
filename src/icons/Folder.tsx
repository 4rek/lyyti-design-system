import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Folder = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.361 18.58C19.956 18.97 19.418 19.221 18.825 19.264L17.187 19.381C13.7334 19.628 10.2666 19.628 6.81297 19.381L5.29897 19.273C4.71745 19.2313 4.16629 18.9974 3.7322 18.6082C3.29811 18.219 3.0057 17.6965 2.90097 17.123C2.46422 14.7331 2.38939 12.2911 2.67897 9.879L2.94997 7.61C3.02821 6.95947 3.34205 6.36013 3.83217 5.92528C4.3223 5.49043 4.95475 5.2502 5.60997 5.25H7.90197C9.01997 5.25 9.95197 6.048 10.157 7.106H18.471C19.778 7.106 20.891 8.056 21.096 9.346L21.16 9.746L21.2 10H21.535C21.8754 9.99992 22.2107 10.0829 22.5118 10.2417C22.8129 10.4005 23.0707 10.6303 23.2629 10.9113C23.4551 11.1922 23.5759 11.5158 23.6147 11.854C23.6536 12.1922 23.6094 12.5348 23.486 12.852L22.236 16.065C21.8499 17.0575 21.2015 17.9264 20.36 18.579L20.361 18.58ZM19.616 9.582L19.68 9.983C19.68 9.989 19.682 9.994 19.683 10H10.37C9.81525 10.0001 9.27352 10.1679 8.81593 10.4815C8.35834 10.7951 8.00628 11.2397 7.80597 11.757L5.47397 17.781L5.40597 17.776C5.15633 17.7584 4.91965 17.6582 4.73318 17.4913C4.54672 17.3244 4.42105 17.1002 4.37597 16.854C3.9663 14.6119 3.89618 12.3209 4.16797 10.058L4.44097 7.788C4.47562 7.50215 4.6136 7.23883 4.82891 7.04764C5.04423 6.85645 5.32202 6.75059 5.60997 6.75H7.90197C8.34197 6.75 8.69897 7.107 8.69897 7.547C8.69897 8.132 9.17297 8.607 9.75897 8.607H18.471C19.041 8.607 19.526 9.02 19.616 9.582ZM7.03897 17.893C10.382 18.1263 13.7373 18.1237 17.08 17.885L18.718 17.767L18.913 17.749L18.911 17.747C19.7919 17.2502 20.4735 16.4636 20.84 15.521L22.09 12.308C22.125 12.218 22.1375 12.1209 22.1264 12.025C22.1153 11.929 22.081 11.8373 22.0264 11.7577C21.9718 11.678 21.8986 11.6129 21.8131 11.568C21.7277 11.5231 21.6325 11.4998 21.536 11.5H10.37C9.85397 11.5 9.39097 11.817 9.20497 12.299L7.03897 17.893Z"
      fill="currentColor"
    />
  );

export default Folder;
