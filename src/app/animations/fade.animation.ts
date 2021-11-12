import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeAnimation =

    trigger('fadeAnimation', [

        transition( '* => *', [
            style({ position: 'relative' }),

            query(':enter', 
                [
                    style({ 
                        opacity: 0,
                        position: 'absolute', 
                    })
                ], 
                { optional: true }
            ),

            query(':leave', 
                [
                    style({ 
                        opacity: 1, 
                        position: 'absolute', 
                    }),
                    animate('0.2s', style({ opacity: 0 }))
                ], 
                { optional: true }
            ),

            query(':enter', 
                [
                    style({ 
                        opacity: 0, 
                        position: 'absolute', 
                    }),
                    animate('0.2s', style({ opacity: 1 }))
                ], 
                { optional: true }
            )

        ])

    ]);