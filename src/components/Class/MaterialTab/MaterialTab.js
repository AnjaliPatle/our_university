import {React, useState} from 'react'
import MaterialElement from './MaterialElement'
import '../../../materialize/css/materialize.css';
import img from './sample_image.png'
import doc from './sample_document.pdf'


const sampleMaterialList=[
	{
		name:"Material 1",
		description:"This is material 1 sample",
		url:img,
		posterName:"Anjali Patle"
	},
	{
		name:"Material 2",
		description:"This is material 2 sample",
		url:doc,
		posterName:"Anjali Patle"
	}
]
function MaterialTab() {
	const [materialList,setMaterialList]=useState(sampleMaterialList);
  return (
    <div className="material_tab">

      {
      	sampleMaterialList.map((item)=>
      		 <MaterialElement data={item}/>
      	)
      }
      <hr className="end_hr"/>
    </div>
  );
}

export default MaterialTab;
