import {Address} from './Address';
import { School } from './School';
import { Experience } from './Experience';
import { Project } from './Project';
import { Skill } from './Skill';
import { Website } from './Website';

export class UserResume
{
    userid  : String;
    resumeName : String;
    name    : String;
    phone   : String;
    email   : String;
    addr    : Address;
    schools : School[];
    intro   : String;
    exp     : Experience[];
    proj    : Project[];
    skills  : Skill[]; 
    sites   : Website[];
}