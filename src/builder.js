var json = [{
        name: 'First Menu',
        slug: '/slug here',
        subpage: [{
            name: 'Nested Item',
            slug: '/slug here'
        }]
    },
    {
        name: 'Second Menu',
        slug: '/slug heres',
        subpage: []
    }
]


function buildNav(data) {
    data.forEach(element => {
        var link = createRegularLink(element.name, element.slug)
        createDropdownLink();

        if (hasSubPage(element)) {
            buildNav(element.subpage);
        }
    });
}

function hasSubPage(node) {
    if (node.subpage != undefined && node.subpage.length > 0) {
        return true;
    } else {
        return false;
    }
}

function createRegularLink(name, slug) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    li.className = "nav-item";
    a.className = "nav-link waves-effect waves-light"
    a.href = slug;
    a.innerHTML = name;

    li.appendChild(a);

    return li;
}

function createDropdownLink() {
    var li = document.createElement("li");
    var a = document.createElement("a");

    li.className = "nav-item dropdown";
    li.className = "nav-link dropdown-toggle waves-effect waves-light";
    $(li).attr('data-toggle', 'dropdown');
    $(li).attr('aria-haspopup', true);
    $(li).attr('aria-expanded', false);

    var dropdown = document.createElement('div');
    dropdown.className = 'dropdown-menu dropdown-primary';
}


/*
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink"
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown
    </a>
    <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item waves-effect waves-light" href="#">Action</a>
        <a class="dropdown-item waves-effect waves-light" href="#">Another action</a>
        <a class="dropdown-item waves-effect waves-light" href="#">Something else here</a>
    </div>
</li>
*/


buildNav(json);