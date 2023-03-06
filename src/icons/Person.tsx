import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Person = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path d="M15.8416 12.1095C17.3184 12.8075 18.5776 13.894 19.4844 15.2526C20.3912 16.6113 20.9115 18.1909 20.9896 19.8225C20.9999 19.972 20.9802 20.122 20.9318 20.2638C20.8833 20.4055 20.807 20.5362 20.7073 20.6481C20.6077 20.76 20.4867 20.8508 20.3514 20.9153C20.2162 20.9798 20.0694 21.0166 19.9198 21.0236C19.7701 21.0306 19.6206 21.0076 19.4799 20.956C19.3392 20.9044 19.2103 20.8253 19.1006 20.7232C18.991 20.6211 18.9028 20.4981 18.8413 20.3614C18.7799 20.2248 18.7463 20.0773 18.7426 19.9275C18.6608 18.1943 17.9147 16.5591 16.6592 15.3615C15.4037 14.1638 13.7352 13.4956 12.0001 13.4956C10.265 13.4956 8.59646 14.1638 7.34095 15.3615C6.08544 16.5591 5.33937 18.1943 5.2576 19.9275C5.23739 20.2209 5.10311 20.4947 4.88352 20.6903C4.66394 20.8859 4.37649 20.9877 4.08274 20.974C3.78899 20.9602 3.5123 20.832 3.3119 20.6168C3.11151 20.4016 3.00336 20.1165 3.0106 19.8225C3.08839 18.191 3.60839 16.6114 4.51495 15.2528C5.4215 13.8941 6.68048 12.8076 8.1571 12.1095C7.21061 11.32 6.53029 10.2582 6.20867 9.06836C5.88705 7.87855 5.93975 6.61855 6.35959 5.45975C6.77944 4.30095 7.54604 3.2996 8.55514 2.59192C9.56424 1.88424 10.7668 1.50458 11.9993 1.50458C13.2319 1.50458 14.4345 1.88424 15.4436 2.59192C16.4526 3.2996 17.2193 4.30095 17.6391 5.45975C18.0589 6.61855 18.1116 7.87855 17.79 9.06836C17.4684 10.2582 16.7881 11.32 15.8416 12.1095ZM15.7501 7.5C15.7501 6.50544 15.355 5.55161 14.6517 4.84835C13.9485 4.14509 12.9947 3.75 12.0001 3.75C11.0055 3.75 10.0517 4.14509 9.34844 4.84835C8.64518 5.55161 8.2501 6.50544 8.2501 7.5C8.2501 8.49456 8.64518 9.44839 9.34844 10.1516C10.0517 10.8549 11.0055 11.25 12.0001 11.25C12.9947 11.25 13.9485 10.8549 14.6517 10.1516C15.355 9.44839 15.7501 8.49456 15.7501 7.5Z" fill="currentColor"/>
);

export default Person;
