import React from 'react'

const AddRecipe = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <dov className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Recipe Title</label>
                        <input type="text" className="form-control" placeholder='Enter a title'/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Creator</label>
                        <input type="text" className="form-control" placeholder='Enter the creator'/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Description</label>
                        <textarea name="" id="" className="form-control" placeholder='Type description.......'></textarea>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Upload an image</label>
                        <br />
                        <input type="submit" value="Upload" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Recipe type</label>
                        <select name="" id="" className="form-select">
                            <option value="Select the recipe type">Select the recipe type</option>
                            <option value="veg">veg</option>
                            <option value="Non-veg">Non-veg</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Ingredients</label>
                        <input type="text" className="form-control" placeholder='Enter the ingredients' />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </dov>
        </div>
      </div>
    </div>
  )
}

export default AddRecipe
