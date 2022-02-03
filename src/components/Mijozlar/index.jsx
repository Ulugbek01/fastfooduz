import React,{useState} from 'react'
import Header from '../Header';
import { customersInfo } from '../../utils/customersInfo';
import {ReactComponent as Check} from '../../assets/icons/check.svg';
import { ButtonItem, CustomerItemWrapper, IconWrapper, MainContainer, NavbarContainer } from './style';
const Mijozlar = () => {
    const [cusInfo, setCusInfo] = useState(customersInfo);
    const [icon, setIcon] = useState(true);
    return (
        <MainContainer>
            <Header text="Yangi mijoz"/>
            <NavbarContainer>
                <NavbarContainer.Product className='nav-title'>Mijoz ismi</NavbarContainer.Product>
                <NavbarContainer.Categoriy className='nav-title'>Telefon raqam</NavbarContainer.Categoriy>
                <NavbarContainer.Price className='nav-title'>Buyurtmalar soni</NavbarContainer.Price>
                <NavbarContainer.Additional className='nav-title'>Status</NavbarContainer.Additional>
                <NavbarContainer.Action className='nav-title'>Action</NavbarContainer.Action>
            </NavbarContainer>
            {cusInfo.map((item) =>{
                 const {edit: Edit, delete: Delete, slash: Slash, check: Check} = item;
                 const onDelete = (id)=> {
                    const newData = cusInfo.filter((value) => value.id !== id);
                    setCusInfo(newData);
                }

                const onChange = ()=> {
                    // setIcon(!icon ? <Slash/>: <Check/>);
                }
                return (
                    <CustomerItemWrapper key={item.id}>
                        <div>{item.name}</div>
                        <div>{item.phone}</div>
                        <div>{item.ordersCount}</div>
                        <div className='status'>{item.status}</div>
                        <div>
                            { 
                            <div className='icon-wrapper'>
                                <IconWrapper onClick={onChange}><Slash/>
                                </IconWrapper>
                                <IconWrapper><Edit/></IconWrapper>
                                <IconWrapper onClick={()=> onDelete(item.id)}><Delete/></IconWrapper>
                            </div>
                            }
                           
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
