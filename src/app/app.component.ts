import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from "@angular/forms";
import {Observable} from "rxjs";
import {Server} from "./server.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    appStatus = new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve('stable');
       }, 2000)
    });

    servers : Server[] = [
        new Server('medium', 'Production Server', 'stable', new Date(15, 1, 2007)),
        new Server('large', 'User Database', 'stable', new Date(15, 1, 2007)),
        new Server('small', 'Development Server', 'offline', new Date(15, 1, 2007)),
        new Server('small', 'Testing Environment Server', 'stable', new Date(15, 1, 2007)),
    ];

    getStatusClasses(server: Server) {
        return {
            'list-group-item-success': server.status === 'stable',
            'list-group-item-warning': server.status === 'offline',
            'list-group-item-danger': server.status === 'critical',
        }
    }

    filteredStatus= '';
    ngOnInit() {

    }
    onAddServer() {
        this.servers.push(
            new Server('small', 'New Server', 'stable', new Date(15, 1, 2007))
        )
    }
}
