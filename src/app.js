import { showAlert } from './messages';
import  "./styles.scss";
import $  from 'jquery';

document.getElementById('btn-alert').addEventListener('click',showAlert);

$("#click-jquery").click(()=>{
    alert("hello world from jquery")
})
