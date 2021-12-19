import React,{useState} from 'react'
import Header from '../Header';
import { branchInfo } from '../../utils/branch';
import { BranchItemWrapper, Container, MainContainer, Navbar, IconWrapper } from './style';

const Filiallar = () => {
    const [data, setData] = useState(branchInfo);
    const onDelete = (id) => {
        const newData = data.filter((value)=> value.id !== id);
        setData(newData);
    }
    return (
        <MainContainer>
            <Header text="Yangi filial"/>
            <Navbar>
                <h3 className='nav-title'>Filial nomi (UZ)</h3>
                <h3 className='nav-title'>Filial nomi (RU)</h3>
                <h3 className='nav-title'>Mo’ljal</h3>
                <h3 className='nav-title'>Ish vaqti</h3>
                <h3 className='nav-title'>Action</h3>
            </Navbar>
            <Container>
                {data.length > 0 ? data.map((value) => {
                    const {iconMap: Map, iconEdit: Edit, iconDelete:Delete} = value;
                    return(
                        <BranchItemWrapper key={value.id}>
                            <div className='branch-item__info'>{value.nameUz}</div>
                            <div className='branch-item__info'>{value.nameRu}</div>
                            <div className='branch-item__info'>{value.destination}</div>
                            <div className='branch-item__info'>{value.workingTime}</div>
                            <div className='branch-item__info icons-wrapper'>
                                <IconWrapper>
                                    <Map/>
                                </IconWrapper>
                                <IconWrapper>
                                    <Edit/>
                                </IconWrapper>
                                <IconWrapper onClick={()=> onDelete(value.id)}>
                                    <Delete/>
                                </IconWrapper>
                            </div>
                        </BranchItemWrapper>
                    )
                }
                ): <div className='loading-wrapper'>
                        <BranchItemWrapper>
                            <p className='warning-info'>Ma'lumot yo'q</p>
                        </BranchItemWrapper>
                        <button className='loading-btn' onClick={()=> setData(branchInfo)}>Qayta yuklash</button>
                    </div>
                }
            </Container>
        </MainContainer>
    )
}

export default Filiallar;
