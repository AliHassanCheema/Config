    export interface PageConfig{
      tableConfig :TableConfig;
      formConfig: FormConfig
    }
    
    export interface TableConfig {
       slug:string;
       title:   string ;
       columns: TableColumn[];
    }
    export interface TableColumn{
      name:     string;
      title:    string;
      visible?: boolean;
    }
    export interface FormConfig{
      slug:string;
      title:string;
      fields:  FormField[]
    }
    export interface FormField{
           name:string;
           title: string;
           type:'text'|'number'|'select';
           option?: string[]; 
           required?:boolean
    }


  // export const Employees: Employee[]=
    // [
    // {name:  "A", company: 'CHI',     contact: 1,         country: 'Pakistan'},
    // {name:  "", company: 'Netsol',  contact: 2,       country: 'UAE'     },
    // {name:  "", company: 'CHI',     contact: 3,        country: 'KSA'     },
    // {name:  "", company: 'Systems', contact: 4,       country: 'Spain'   },
    // {name:  "", company: 'Nescom',  contact: 5,     country: 'Swedan'  },
    // {name:  "", company: 'Netsol',  contact: 6,  country: 'Ireland' },
    // ]