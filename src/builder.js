var json = [{
        name: 'First Menu',
        slug: '/slug here'
    },
    {
        name: 'Second Menu',
        slug: '/slug heres'
    }
]


function buildNav(data) {
    json.forEach(element => {
        console.log(element);
    });
}

buildNav(json);