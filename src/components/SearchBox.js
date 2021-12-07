import {searchMeals} from "../services/mealService";

export default function SearchBox({searchResult}) {

    function onClickHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.target);

    let searchText = formData.get("search");
    searchMeals(searchText).then(result =>{
        searchResult(result);
    });

  }

  return (
    <div
      className="row tm-content-row"
      style={{
        height: "30px",
        padding: "0px",
        marginTop: "0",
        marginBottom: 0,
      }}
    >
      <div
        className="tm-block-col tm-col-account-settings"
        style={{
          padding: "0px",
          marginTop: "0",
          marginBottom: 0,
          width: "250px",
        }}
      >
        <div
          className="tm-bg-primary-dark tm-block tm-block-settings"
          style={{
            padding: "0px",
            marginTop: "0",
            marginBottom: 0,
            width: "500px",
            display: "inline-block",
          }}
        >
          <form action="" className="tm-signup-form row" onSubmit={onClickHandler}>
            <input
              id="search"
              name="search"
              type="text"
              className="form-control validate"
              style={{
                height: "30px",
                width: "100px",
              }}
            />
            <button
              type="submit"
              className="btn btn-primary btn-block text-uppercase"
              style={{
                height: "30px",
                width: "80px",
                padding: "0",
              }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
