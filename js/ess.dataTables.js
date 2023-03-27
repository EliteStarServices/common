    /**
     * @Project: Virtual Airlines Manager (VAM)
     * @Author: Alejandro Garcia
     * @Web http://virtualairlinesmanager.net
     * Copyright (c) 2013 - 2016 Alejandro Garcia
     * VAM is licensed under the following license:
     *   Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
     *   Visit http://creativecommons.org/licenses/by-nc-sa/4.0/
     */


// dataTables JS
$(document).ready(function(){
    $('#servinfo_client').DataTable({
        "bAutoWidth": false,
        "bPaginate": false,
        "ordering": false
    });
    $('#pilot_flights').DataTable({
        "order": []
    });
    $('#report_pilot').DataTable({
        "order": []
    });
    $('#ranks').DataTable({
        "order": []
    });
    $('#my_bank').DataTable({
        "order": []
    });
    $('#hub_routes').dataTable( {
      "searching": false
    } );

    $('#serv_info').DataTable( {
        "iDisplayLength": 25
    } );

    $('#fleet_public').DataTable();
    $('#pilots_public').DataTable();
    $('#routes_public').DataTable();
    $('#tours').DataTable();
    $('#pilots_flights_per_month').DataTable();
    $('#pilots_hours_per_month').DataTable();
    $('#hub_pilot').DataTable();
    $('#hub_fleet').DataTable();
    $('#mails').DataTable();
    $('#route_select_one').DataTable();
    $('#route_select_two').DataTable();
    $('#downloads').DataTable();
    $('#report_plane_out').DataTable();
    $('#validate_flights').DataTable();
    $('#validate_jumps').DataTable();
    $('#data_table').DataTable();


    $('#tour_inactive').DataTable({
footerCallback: function (row, data, start, end, display) {
            var api = this.api(), data;
 
            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                return typeof i === 'string' ? i.replace(/[$\s,]/g, '') * 1 : typeof i === 'number' ? i : 0;
            };
 
            // Total over all pages
//            var total = api
//                .column( 5 )
//                .data()
//                .reduce(function (a, b) {
//                    return intVal(a) + intVal(b);
//                }, 0);
 
            // Total over this page
            var pageTotal = api
                .column( 5, { search:'applied' })
                .data()
                .reduce(function (a, b) {
                    return intVal(a) + intVal(b);
                }, 0);
 
            // Update footer
            $(api.column( 5 ).footer()).html('$' + pageTotal.toLocaleString('en-US'));
//            $(api.column( 5 ).footer()).html('$' + pageTotal.toLocaleString('en-US') + ' ($' + total + ' Total)');
        },
      "order": [],
    });

});
