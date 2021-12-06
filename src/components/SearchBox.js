export default function SearchBox() {
  function onClickHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.target);

    let searchText = formData.get("search");
    console.log(`Searching for: ${searchText}`);
  }

  return (
    <div
      class="row tm-content-row"
      style={{
        height: "30px",
        "margin-top": "0",
        "margin-bottom": 0
      }}
    >
      <div class="tm-block-col tm-col-account-settings">
        <div class="tm-bg-primary-dark tm-block tm-block-settings">
          <form action="" class="tm-signup-form row">
            <div class="form-group col-lg-6">
              <input
                id="search"
                name="search"
                type="text"
                class="form-control validate"
                style={{
                  height: "30px",
                }}
              />
            </div>
            <div class="form-group col-lg-6">
              <button
                type="submit"
                class="btn btn-primary btn-block text-uppercase"
                style={{
                  height: "30px",
                  width: "80px",
                  padding: "0",
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
