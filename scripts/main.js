function showModal(x) {
    window._cache = {};

    window._cache.dataVariable = x;
    document.querySelector('#modal').style.display = 'block';
    document.querySelector('#'+x).style.display = 'block';
    };


function closeModal() {
    let x = window._cache.dataVariable;
    document.querySelector('#modal').style.display = 'none';
    document.querySelector('#'+x).style.display = 'none';
};

function showMore(x, y) {
        document.querySelector('#'+x).style.display = 'block';
        document.querySelector('#'+y).style.display = 'none';
    };

function showLess(x, y) {
        document.querySelector('#'+x).style.display = 'none';
        document.querySelector('#'+y).style.display = 'block';
    };