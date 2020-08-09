import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const ProductCategory = ({getProductCategory,GetCategory}) => {
  const { id } = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    getProductCategory(id)
    GetCategory()
  },[])
  const categories = useSelector(state => state.category.categories)
  const Products = useSelector(state => state.product.productCategory);
    return (
        <div className="container">
        <div className="row mb-5">
        <div className="col-md-9 order-2">

          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="float-md-left mb-4"><h2 className="text-black h5">Shop All</h2></div>
              <div className="d-flex">
                <div className="dropdown mr-1 ml-md-auto">
                  <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Latest
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                    <a className="dropdown-item" href="#">Men</a>
                    <a className="dropdown-item" href="#">Women</a>
                    <a className="dropdown-item" href="#">Children</a>
                  </div>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Reference</button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                    <a className="dropdown-item" href="#">Relevance</a>
                    <a className="dropdown-item" href="#">Name, A to Z</a>
                    <a className="dropdown-item" href="#">Name, Z to A</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Price, low to high</a>
                    <a className="dropdown-item" href="#">Price, high to low</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row">

            {Products? Products.map((Product,index)=>
              <div key={index} className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" style={{height:"400px",width:'270px'}}>
                <div className="block-4 text-center border">
                  <figure className="block-4-image" style={{height:'237px'}}>
                    <a ><img src={Product.image} alt="Image placeholder" className="img-fluid" /></a>
                  </figure>
                  <div className="block-4-text" style={{height:'150px'}}>
                    <h3 className="pb-2 pt-2"><Link to={`/Store/Product/${Product.id}`} className="p-2">{Product.name_product.substr(0,40)}</Link></h3>
                    <p className="mb-0">{Product.mota.substr(0,50)}</p>
                    <p className="text-primary font-weight-bold">{Product.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} VNĐ</p>
                  </div>
                </div>
              </div>
            ):''
}

            </div>
          </div>
        </div>

        <div className="col-md-3 order-1 mb-5 mb-md-0">
          <div className="border p-4 rounded mb-4">
            <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
            <ul className="list-unstyled mb-0">
            {categories&&categories.map((cate,index)=>

              cate.id!==0&&<li onClick={()=>dispatch(getProductCategory(cate.id))} className="mb-1" key={index}><Link className="d-flex" to={`/Store/Category/${cate.id}`}><span>{cate.name_category}</span> <span className="text-black ml-auto">({cate.product.length})</span></Link></li>
                  )}
            </ul>
          </div>

          <div className="border p-4 rounded mb-4">
            <div className="mb-4">
              <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
              <div id="slider-range" className="border-primary"></div>
              <input type="text" name="text" id="amount" className="form-control border-0 pl-0 bg-white" disabled="" />
            </div>

            <div className="mb-4">
              <h3 className="mb-3 h6 text-uppercase text-black d-block">Size</h3>
              <label htmlFor="s_sm" className="d-flex">
                <input type="checkbox" id="s_sm" className="mr-2 mt-1" /> <span className="text-black">Small (2,319)</span>
              </label>
              <label htmlFor="s_md" className="d-flex">
                <input type="checkbox" id="s_md" className="mr-2 mt-1"/> <span className="text-black">Medium (1,282)</span>
              </label>
              <label htmlFor="s_lg" className="d-flex">
                <input type="checkbox" id="s_lg" className="mr-2 mt-1"/> <span className="text-black">Large (1,392)</span>
              </label>
            </div>

            <div className="mb-4">
              <h3 className="mb-3 h6 text-uppercase text-black d-block">Color</h3>
              <a href="#" className="d-flex color-item align-items-center" >
                <span className="bg-danger color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Red (2,429)</span>
              </a>
              <a href="#" className="d-flex color-item align-items-center" >
                <span className="bg-success color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Green (2,298)</span>
              </a>
              <a href="#" className="d-flex color-item align-items-center" >
                <span className="bg-info color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Blue (1,075)</span>
              </a>
              <a href="#" className="d-flex color-item align-items-center" >
                <span className="bg-primary color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Purple (1,075)</span>
              </a>
            </div>

          </div>
        </div>
      </div>
      </div>
    )
}

export default ProductCategory
