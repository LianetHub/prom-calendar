$(document).ready(function () {

    let table = $('#my-table').DataTable({
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        fixedHeader: true,
        fixedColumns: {
            leftColumns: 4
        },
        colReorder: true,
        autoWidth: false,
        responsive: true,
        searching: false,
        info: false,
        columnDefs: [
            { orderable: true, targets: [0, 1, 2, 3] },
            { orderable: false, targets: '_all' },
        ],
    });








});