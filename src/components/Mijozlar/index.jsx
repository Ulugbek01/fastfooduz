import React,{useState} from 'react'
import Header from '../Header';
import { customersInfo } from '../../utils/customersInfo';
import { ButtonItem, CustomerItemWrapper, IconWrapper, MainContainer } from './style';
import Navbar from '../Navbar';

const Mijozlar = () => {
    const [cusInfo, setCusInfo] = useState(customersInfo);
    return (
        <MainContainer>
            <Header text="Yangi mijoz"/>
            <Navbar name="Mijoz ismi" phone="Telefon raqam" ordersCount="Buyurtmalar soni" status="Status" action="Action"/>
            {cusInfo.map((item) =>{
                 const {edit: Edit, delete: Delete, slash: Slash, check: Check} = item;
                 const onDelete = (id)=> {
                    const newData = cusInfo.filter((value) => value.id !== id);
                    setCusInfo(newData);
                }
                return (
                    <CustomerItemWrapper key={item.id}>
                        <div>{item.name}</div>
                        <div>{item.phone}</div>
                        <div>{item.ordersCount}</div>
                        <div status={item.status.toLowerCase() === 'block'} className='status'>{item.status}</div>
                        <div>
                            {item.status.toLowerCase() === 'aktiv' ? 
                            <div className='icon-wrapper'>
                                <IconWrapper> <Slash/></IconWrapper>
                                <IconWrapper><Edit/></IconWrapper>
                                <IconWrapper onClick={()=> onDelete(item.id)}><Delete/></IconWrapper>
                            </div>
                            :<div className='icon-wrapper'>
                                <IconWrapper> <Check/></IconWrapper>
                                <IconWrapper><Edit/></IconWrapper>
                                <IconWrapper onClick={()=> onDelete(item.id)}><Delete/></IconWrapper>
                              </div>}
                           
                        </div>
                </CustomerItemWrapper>
                )
            } 
            )}
            <ButtonItem onClick={()=> setCusInfo(customersInfo)}>Yana yuklash</ButtonItem>
        </MainContainer>
    )
}

export default Mijozlar;    
