import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our products</h1>
        <p className='explore-menu-text'>Il nostro prodotto è il migliore sul mercato e garantiamo la tua completa soddisfazione. Unisciti ora ai migliaia di clienti soddisfatti.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div bnClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
