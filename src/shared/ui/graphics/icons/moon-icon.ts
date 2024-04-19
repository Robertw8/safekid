const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22" fill="none"><rect width="19.5" height="19.5" x="1.25" y="1.25" fill="#fff" rx="9.75"/><rect width="19.5" height="19.5" x="1.25" y="1.25" fill="url(#a)" rx="9.75"/><rect width="19.5" height="19.5" x="1.25" y="1.25" stroke="#fff" stroke-width="1.5" rx="9.75"/><defs><pattern id="a" width="1" height="1" patternContentUnits="objectBoundingBox"><use xlink:href="#b" transform="rotate(-7.618 1.073 .156) scale(.00926)"/></pattern><image xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEBIAEgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCABgAGADAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/igAoAKACgD5b+LP7a/7K3wQurnTfiN8bfBml63ZSyW974c0i6uvF/iaxuYwc2+o+HfB9prusaXKT8o/tOztEyeXABI/XeDfAXxg4+o0sVwvwFnuLwFeEatDNMbRo5LlWIpS2q4XM87rZfgcXBLV/Va9aVtot2RpGlUltF+r0X3ux8Y67/wWn/Y+0iYxafpfxm8UIDgXGheCtBt4SM4yF8TeM/Dtxg9eYAcDkA4FfumX/QQ8bcbBTxOM4GyiVv4WYZ9mNWa02byrIszpX6aVGr9bamiw1R/yr1b/AETPtP8AZf8A2vPg3+1z4Z1nxH8KL/WY5/DV1Z2fibwx4o02HSfE3h+TUop5tMkv7WzvtV02a01FLS8Fpe6ZquoWkktndwNMk9vLEv4R4t+CvHHgvmuByvjHD4GVPNaNevlWbZRiqmMynMo4WdOGKjh61fD4PFU62FlWoe2oYvB4atGFejUUHTqwm8p05U3aXXZrZn0/X5KQeF/tE/tFfDX9l74bXfxR+KV7qUGgw6lZ6Jp+n6JYrqWua/r2oRXVxZ6Lo1pNcWVpJfTWlhqF6Xv7/T7KG0sbqa4vIljG79C8MvDHirxb4po8I8I0MLUzGeFr4/E4nH4h4XL8uy7DTo0q+Px1aFKvWjh4VsRhqCjh8NicROtiKUKdCblpUISnLljvvrsl3Z+cP/D8H9lD/on37Q3/AISfw2/+ezX9Q/8AEgXjH/0Uvhn/AOHnin/6DTb6tU7w++X/AMiH/D8H9lD/AKJ9+0N/4Sfw2/8Ans0f8SBeMf8A0Uvhn/4eeKf/AKDQ+rVO8Pvl/wDIn6Pfs6/tE/Db9qH4a2XxS+F13qU2gz6lfaJqGn63Zxafr2ga5pq2813o2tWdvdX9pDfR2l7YX6Gy1C+tJrLULO4hupFlwv8AL3id4ZcU+EnFVfhHi6jhYZjTwuHx+GxOArzxOXZjl+KdWFHHYCvVo4etPDyrUMTh5KvhsPWhiMNXpzpRcNcZwlCXLLffTZruj3Svz0kKAPmf9p39rL4P/sneDE8VfE/WX/tDUxdReE/BmkLHd+K/F19axeZLBpdg0kaQWNuXhTUNb1CW10jTmuLaK4uvtd5Y2t1+reE3g3xt4yZ7LJ+EsDH6thHRnnOe41zo5PkuHrT5YVMXiFGUqmIqpTeGwGGhWxuKVOrOnR9jQxFajcKcqjtHpu3sj+Zb49f8FCv2s/2xPEbfDzwOuveE/C3iW7l07Q/hL8JotUvNe1+CbeI7DXtZ0y3XxJ4snlt8rf2dvHpvh+4VGmPh+AIWr/Vzw6+jT4NeCGVribiB5dnOb5VRhisw4z4ynhKGXZdUhyuWIy7A4uo8ryanCrZ4evUlisypNqCzKpdI7YUadNXdm19qWy9Oi/M9P+D/APwRr/aE8ZaWviT4u+J/CHwK8PLZnULqHWpR4o8U2VlGsk09zf6Vpd7ZaFpkUNpH9pn/ALQ8V29zaK4W7tIJIrhIfkuNvpyeGmR4t5VwVlOd+IWZuusNRngYPKcor4iTjCnSw2MxdCvmOKnUrS9lT+rZPVpVnG9GtUjOnKaliYLSKcn5aL/P8D86Pjp4c+D3hLx/f+FPgn4w8SfEfwzobHTbnx7rdhY6RZ+KtWicx3N54Y0SzE9xaaAkgMVhdX+o3lzqq/6XHFa25h8/+nvD7NONs54cw2c8e5JlfC+a5gliqXDuAxGIxtfJ8HOPNSoZtj67p0q2ZOLU8RSw2FoUsG/3Mp1aqn7PWLk1eSSb6Lp6vv8Akf0Bf8Eb/wBlb4p/CXTviF8Z/iXo2peDbb4iaLoWg+DPC2rxy2Ws3+j2t3Nq154o1bSZlSbTLa4kextfDyXqR6hdwHVr1rW30+fTLrUv83fpxeL/AAhxniuGuBeFcdhc8q8MY/MMxz3N8FKFfA4bHVqMMFQyjB4yDlTxdWnGOIrZnKg5YajUWDoKtVxNPF0cLy4ipGVox1s221t6efn/AMOfuPX+fxynhf7RX7O3w2/ah+Gt78LfijaalNoM+pWOt6fqGiXkWn69oGuaatxDaazot5cWt/aQ30dpe39g4vdPvrSay1C8t5rWRZcr+heGPibxT4ScVUOLuEa2FhmNPC4jAYnDY+hPE5dmOX4p0p1sDj6FKth608PKtQw2Ii6GJw9aGIw1CpCrFw1qE5QlzR3212a7M/FP9qD/AIJv/sC/so/DS9+IXxC+J37Q01zN59l4R8I2XjL4Yrr/AI019YvMi0rSopPhK3k20O6ObWNYmjay0ayYTzia5msrK8/vHwl+lH9I3xi4qocNcNcJ+GcKUPZ186zqvkfFjy7Icuc+WeMxk48ZrnqztKGCwUJKvjq69nT5KUK9eh1U61WpKyjDzdpWS/8AAvuXU/HP9nf9nD4h/tS/FO0+HHwq0eYLcTNfavrWqyNcaR4J8MC5CS6z4l1S2tLWN1to3SCFLezt7nWtQMdpptiJ7hIU/uDxN8UeGfCLhCtxRxhjabdOmsPgsBg4qnjc+zZ0nKGByrB1a1WUXVlGVScqtepSwGGUq2KxDp03Ul0TmoR5pP8Azb7I/sq/Zj/Zw8Cfsr/CXR/hR4C+13Vra3E2s+Ide1A41HxT4r1C3s7fVvEN7CjvBaNcxWFlaWlhbEw2GmWNjZ+ZcyQSXdx/hr4seKPEPi/xnjuMeI/Y0q1WlTwOWZdhl/suUZPhqterg8toTlGNSsqU8RXrVsRV/eYnFYjEV+WlCpGjT86c3UlzP0S7LsfQVfmxB8z/ALWP7T3gr9k74Rav8TfFoGpagXGk+DfCcF1Dbaj4u8UXSObPTbZpSTDY2yK+oa3qCxTnTtJtrmeOC6uzaWV1+reDfhNn3jJxrguFMmbwuGUXjc8zmpRqVcLkuU0ZJV8VVUFaeIqyccNgMM50/rWMq0qcqlGiq1ejdODqS5V6t9kfyq/Dz4eftGf8FM/2jNYvr7WHv9Wv3TVPGfjPVEn/AOET+G/hPz3isLGxsInCw20Kh7Dwz4ZsHS61W6Se5uZ0RNc1y2/2B4m4m8MPopeGGBw+HwMcNgsNGWDyLIsHKn/bPFOc+zjPEYjEYicW6lWo2sTm2bYlSo4OjKnSpU5Sll+X1e6UoUILTySW7f8AW7/4CP6nf2Yf2Pvgt+yh4WTRfht4eil8RXtnbw+KfiBq8cV14v8AFNxEqGVrvUCp/s7SzOvnW2gaWLXSbRsSfZ5rxp7yf/IXxZ8beO/GPN5Y/inM5wyyhXqVMo4bwUp0ckyinNyUFRwyf+04tU3yVcyxftsbWXue0hQVOhT4p1JVHq9OiWy/4Pmfnf8A8Fkv2rL34cfD3RP2dPBOrvY+KfitYzat49ubGdor7TfhrBcSWcOk+ZE8c1uPG+rW91ZXLI7LcaDoeuaVeQta6yN39M/Qc8HsPxRxLj/E/P8ABRxGUcH4iGD4dpYimp4fFcVVKUa88byzjKFR5BgqtGvSUop08xzDL8ZQmq2BdtsNTu3N7R0Xr3+X5+h47/wSP/YS0DU9F039q34taLBq8txfTn4M+HNSi82ys10q8ubG88fanp9xD5d1fHUbaS38ILMXgsltZ/EKQzXU+hXth9x9M/6Q2Y4THYrwd4Mx9TBQpYemuOs0ws+TEV3jKFLEUOHMJiadTmo4f6rVjVztwUald1qeWynClTzGhiHiKr1px/7ef6f5/d3P6F6/zROQKAPn39pz9o/wJ+yv8JdY+K/j37VdWtrcQ6N4e0HTwBqPinxXqFveXGk+HrKZ0eC0a5isL27u7+5BhsNMsb688u5kgjtLj9J8J/C7iHxf4zwPB3DvsaVarSqY7M8xxL/2XKMnw1WhSxmZ14RaqVlSniKFGjh6X7zE4rEYehzUo1JVqdwg6klFerfZdz+NX9oj9o/4h/tS/FO7+I/xV1iYLcTLY6RoulRtcaR4J8MC5LxaN4a0u5u7WN1to3eeZ7i8t7nWtQMl3qV8J7h5k/3K8MvC7hnwi4Qo8L8H4Km3TpvEY3H4ySp43Ps2dJRnjs1xlKjVlF1ZRjThGlQqUsBhlGjhcO6dNU5ejCChHliv82+7P2M/Zf8A+CkH7Av7KPw0svh78Pfhj+0NNczeRe+LvF174N+GK6/4019YvLl1XVZY/i03k20O6SHR9Hhkay0ayYwQGa5mvb28/h/xa+i59I3xi4qr8S8S8WeGcKUPaUMlyWhnnFjy7Icuc+aGDwcJcGLnqztGeNxs4qvjq69pU5KUKFChz1KNWpK7lDyV5WS/8B+99T9rP2df2ifht+1D8NbL4pfC671KbQZ9SvtE1DT9bs4tP17QNc01bea70bWrO3ur+0hvo7S9sL9DZahfWk1lqFncQ3Uiy4X+DvE7wy4p8JOKq/CPF1HCwzGnhcPj8NicBXnicuzHL8U6sKOOwFerRw9aeHlWoYnDyVfDYetDEYavTnSi4a8s4ShLllvvps13R7pX56Sfx8/t/fHzxV+2X+1kPA3gEz674V8M+J4/hL8IdCsH3w69q91q8Oj6j4ihIfyZp/F/iIA2V4RCq+HLbQoZkSS3uJpf9tfo3+HOUeBvg3/rBxH7PL84zbKZcZ8a5hiY8tTLsFSwVTG4XLJ+7zwp5LljaxFBObeaVcwnTco1aUIehSiqdO70bXNJ9vL5L8bn9MX7H/7MPhP9lH4L+Hfh1oVvbXHiOe2ttW+IfidIYhd+KPGNzbo2p3TzrFHK2k6dK0mm+HLOUubDR4LdJHnvZb28uv8AKfxs8Wc58YuO8z4nzCpVpZXTq1cHwzlLnN0coyOlUawtGNNzlBY3FQUcVmleHKsRjqlSUY06EMPQo8dSbqSbe20V2X+fc+pK/IjM/jh/bo1XWP2gP+Chvj/wpDcyGW8+KXhn4KeHIXkEsenrpNzpPgYRW4G4JHPr39parLFyVu9QuSwDMVH+4X0fMHgfDf6M/DecVKUVChwjm3HuaTUXCeJeNpYziDnqt2cpU8u+q4OE9L0cNSs7JM9GlaFFP+65P8/yP6/fCPhXQ/A3hXw34L8M2Uem+HPCWhaT4b0LT4gqx2ekaJYwadp9soVVU+Va28SFgo3MCxGSa/xQzrOMw4gzjNc9zbESxWZ5zmOMzTMMTNtyr43H4ipisTVd2379arOSV3ZNJaI89tttvVvVnyP+1Z+318Cf2P8AVfDfh34lR+M9e8UeJ9NfW7Pw14E0bS9U1Sz0EXVzYQ61qUmva/4Z0u2sbzULK+srNI9SnvZ57K6IsxDC0tfs/g99HLxD8bMHmmZ8KyyLLspynFRwFfNeIcdi8HhK+YujSxM8BhY5dl2a4uriKGGxGHr15SwtPD06eIop13UmoGlOlKpdxsktLt9e2iZ8jf8AD8H9lD/on37Q3/hJ/Db/AOezX7T/AMSBeMf/AEUvhn/4eeKf/oNL+rVO8Pvl/wDInovhz44fsg/8FYfBXjL4Fz6f8RdHuPDv9l+NU0zxDaaH4a8Y6b9huG0qLxl4RvtJ1bxrocn9nSaudE1FdRE+2DX1gn0yWG9WVfmM04A8a/ocZ9kfiDTxPDGOpZn9byGWLyytmGa5HivrFJYyeR51h8ZgshzCP1qOCWPwzw3s71MtdSni4VKDg041KDUtHfTS7Xo9n5/I86/4cffsof8ARQf2hv8AwrPht/8AOmr6f/if3xj/AOia8M//AAzcU/8A0ZD+s1O0Pul/8kH/AA4+/ZQ/6KD+0N/4Vnw2/wDnTUf8T++Mf/RNeGf/AIZuKf8A6Mg+s1O0Pul/8kfo9+zt+zr8NP2XvhtafC74W2WpQaDDqV5reoX+t3y6lrmv69qEVrb3mtazdxW9laPfTWlhp9kEsLDT7KG0sbWG3s4ljO7+XvE3xO4q8W+Ka3F3F1fC1MxnhaGAw2GwGHeFy/Lsuw061WhgMDRnVr1o4eFbE4mu5YjE4nETrYirOpXm5K2U5ynLmlvtpsl2ON/bY+LVx8D/ANlb41/EXT7lrPWtN8G3WjeG7qNkWe18TeLrm28I+H763WTIlk0zVtbtdTMe1sxWUrMuxXI9vwF4Mp8f+L/AXDGJpKvgMVnlHHZpRkpOnWynJaVXOsyw9Rx1hHF4PAVsIp3Vp14JPmaHSjzVIrzu/Rav8j+fz/gi98GLfx9+0h4g+KGqWoudK+CvhQ31jvhimhTxj42+3aFoLTCVXCmHRLXxde2roomiv7K0uIpEaDn/AEk+nXx1U4c8Lst4SwlZ0sZx5nH1fEcs5wqSyPIfq+YZioODTaqY+tkuHrRk3CeGr1qU4yVTTqxMrQUf5n+C1f42P6qa/wAfjhCgD+Nbx7Ifh7/wVH1nV9cBgt9F/bdt/GdyZAE26Td/Gi28XQTHMgXY+lXcMyuXQMjBz5eSF/3J4dj/AKy/RGwOCy9qpUx/gFVyKkotyvjKPAtXJakNI35o4yjODSjJqScVzWu/RWtBf9erf+S2P7Ka/wANjzj4B/bf/Y4/Zh+P2l23xY/aA8ReI/h3F8MPDl5DqPxA8Ma9o+hzJ4VjuZb9NL1g694e8T2V7bWupXl3Lo9taaauqy6jqs9nZPcy30dq/wDSHgD44eLPhxi6vBvhvlmWcTT4szOhPDcN5tl2NzCEs4lShhpYzA/2dmeU4jD1auFoUYY2rWxTwcMLg6devGlDDyrR1pVJxfLBJ8z2avr30a+fQ/kv8YeGPBfjP4vTeDf2Z9B+JPiDw3rOt2+geANN8YXOla94+8TXEsgtobua38N+H/D9hZtqs3+k2+lR2U76XasI7zUrl45Zl/2VyTNs9yLgqnnnitmPC2W5pgcBVzLiTFZJSxmXcOZTShF1Z0adXNcyzLEV1g4fuquMliKccXVTlQwtJShB+gm1G82k0rtrRL729u5/VB/wTs/YG039kXwrdeMPGE8OsfHLxxo0Vh4ou7S4M2keEdCluLXUj4L0V4z5V+wvrOyutf1kh47/AFCxtodN2afZJc6h/kJ9Jv6RmK8ac4pZJklOpgvD7h/HTxOU0a1PkxudZhClWwv9u4+Mlz4dfV6+Io5bgVyyw+GxFWpiubE15UsNw1qvtHZfCnp3b7/5L7/L9Lq/lUwCgAoA/I3/AILT69caR+x/pWnwyOkfin4zeC9Bu1U4WW3t9B8Z+J1jkGDlBd+HLaUDK/vI4znja39o/QQy6ljfG3GYmpGMpZRwNn2Y0W1rCrVzHIspco6q0nRzSrC+vuzkra3XRhlep6Rb/FL9Tzj/AIIaeHoLb4B/GDxWsYFzrXxfXw9NLlMvB4Y8F+HNSt4yAPMxFJ4uumBYlCZjsAYSZ+o/aB5nUq+I3BOTuTdLAcEvM4Q960ambZ7mmFqy/lvOOS0U7Lm9xc2nLZ4p+/Fdo3+9v/I/bmv4GOYKAP5Uf+CzHwSu/AH7SmnfFyxhdfD/AMaPD9neSXEcLxxWvjHwZZ6f4e1m08xV8oPPpEfhzVkcus01xeX58vEBkf8A2D+gzx7R4j8LMVwXiKkXmXAmZV6EaUpxlOrkee18TmWBrcrfPy08bPNMHKPK4U6dDDrmvU5I92GleHL1i/weq/G5+9n7DX7S+j/tRfs+eD/G0d/FN410Sxs/CnxM00yf6XYeM9JsoIr29kiYlxY+I4vK8QaZMDJGbe/azM73lhexxf50/SB8Ksb4R+JWd5DLDzhkOPxFfOOFMVy/ucTkWMr1J4ehGaXK8Rlc+fLcXC0Jqph1XVONDEYeU+WrDkm10esfT/gbH5w/8Fjfh/8AtYfEjVfhl4f+F/g3x948+CQ0WS+1fw/8OvD+r+J7v/hY9tqmorJfeKtJ8O2d7qUmnweH5tHXw5cXkD6db3j675TRXchL/wBRfQf4k8HOFsHxXmXFuecOcO8fPHxw+CzLifMsFlNH/VerhMK44fJ8bmdehhY4mpmUMc80pUKkcVVoLLudToxtHbDunFScmlK+7aXu+Tfnv8j8XfB/7Pn7cfw91yHxN4B+CH7V3gfxJbQ3Ftb+IPB/w1+L3hnXLe3vIjDdwQ6toui2V/FDdQs0VxElwqTxExyqyEiv7szvxK+j/wAS5fUyniPj/wAHeIMrq1KVWrlud8VcFZrl9SrQmqlGpUwePx9fDzqUZpTpTlTcqc0pQaaudLnSas5U2uzlFr8Wfuj/AMEpv+G6x4r+JX/DSg+M5+GLeG7f+x2+O7eK/wDhJx46XVbD7GPDK+PG/wCElGiNoD64dZa3T+xzepo4Vhdq4P8Anz9ML/iXr+x+Ff8AiFj4F/1sWaVfry8PFk/9kvh54PE+3eavh1f2V9fWYxy/6iqsvryoPGtr2Lizlr+ytHk5ea/2bWt520ve3mftjX8FHMfh7+1R/wAFjtM+EPxU1n4Z/B74eaJ8SLbwfqJ0vxP4z1fxLcWuj3+rWpaPVtH8NWukWc5lj0y4H2OXX7jUJYJr6K8gt9JltoIb+7/v7wg+g/i+NeD8DxXxvxNj+F6ud4X63lORYLKqVXG4fB1UpYPG5rWxtemoSxdN+3hl1LDQqQw86FSpjYValTD0eqnh+aPNJtXWiS+5u/5fifpJ+yH+094b/a3+DGmfFjw/o9z4cuRq2o+GfFHhq6ulv30DxPpEdnc3djFqSQWqajZz6fqWmapY3Ytrd3tNRhjuLe3uo54Y/wCWvGrwmzTwY46xfBuZY2lmlJ4PC5tlGa0aTw0cyynGyr0qOInhZVK0sLXp4nC4vCYii6tWMa2GqSpVKlGVOpLCpB05OL16p90/6sfFf/BafQptX/Y+0vUIgSnhf4zeCtduCM8Q3Gg+M/DKk44A+0eIoBzkZIHUiv3j6CGYQwXjbjMNNrmzfgbPsvpbazpZjkWatLz9nllR6a2T6XNcM/3nrFr8U/0POP8Aghp4igufgH8YPCasDc6L8X18RSpuQlYPFHgvw5ptuxQKJFDyeELoBmdkYoQioySF/qP2geWVKXiNwTnLT9lj+CXlkJWlZ1Mpz3NMVVV78rcY51SbSipLmTk2pRUXil70X3jb7m/8z9ua/gY5goA+a/2sv2bPCv7VfwW8SfCrxGyWF/cBdY8GeI/L8ybwt4y06KcaPrCoAWls38+fTNZtVAe80XUNQt4JLe6e3urf9T8G/FPOPB/jvKuMMrUsRh6beBz3K+blhm+R4qdP69gnJtKFePs6eKwNZ+7Qx+Gw1WpGpRjVo1LpzdOSkvRruuq/y8z+VX4U/FX9ob/gmh+0TrOlavok9lfWM9vpnxC+H2pXMieG/H/hlZpJLHUNN1GOGaJhJE8t94S8W2ME72Us00U1vc2k+saNdf7BcY8H+Gf0q/DLA4zBY+nXw+Ip1cXw1xLhaUZZpw3mzhGGIw2KwspwmnGcYYfOcmxFSnGvCEJ06lKtTwOOo98owrQX4Pqn/W6P6eP2av26/wBnb9qDT7CLwT40stG8czW0D6j8NPFU8WjeMLK7aNDcW+nW100dt4otreRtv9o+Gp9St1RoftYsriQ2qf5NeKn0evE3wlxOJnn+RYjHcP06tSOF4ryenPHZJXoqTVKpiqtFSq5RVqRV/qua08LVclP2Lr04+1lwzpThutO62/4HzPsavw8zMHxN4q8MeC9Gu/EXjDxFofhXQNPQyX2t+I9WsdF0mzQKzlrnUNSntrSEbUZh5kq5CnGcGvRyrJ82z3HUcsyTLMwzjMsTJRw+AyvB4jH4yvJtRSpYbC06tabvJL3YOzavuNJt2SbfZan4D/t3f8Fb9LvtI134Rfsp6leyzahHLpfiP40xLNp6W9pIrR31j8OoplivjdTqTbP4vuY7T7InnyeHIJppLDX7X/Rz6PP0MMXh8bl/GnjDhaEIYaUMXlfAk3DEyq1otSw+I4nnBzw6o02lVjklKVb20vZwzSpThHE5bW6qWHs1Kfyj/n/kfiZ4j+Bfj/wl8HvB/wAbPFdg2h+GfiP4kv8ARPAVtqQeLVvFVnpFibzW/E9nbSASJoFpcT6dYWt/KNuq3N5LJaZt7Xzp/wC9sr8QeHM542zvgLJsSswzXhfK8Pj+IquFcZ4PJ6+NxCoYDKa9WN4vMq1KnisTVw8HfB0qEI1rVavJT6VJOTitWld+XZev5H9K/wDwRY0G40j9j7VNQmjdI/FPxm8a69aMwwstvb6D4M8MNJGcnKC78OXMROF/eRyDHG5v8rfp35jSxvjbhMNTlGUso4GyHLqyT1hVq5jnubKMtFaTo5pSnbX3ZRd9bLjxL/eLyil+Lf6n2d+2v8Jrr43/ALK3xt+HGm20t7reqeDLrV/DllbxiS5vvE3hC6tPGHh3TrcYyJdU1jQrPTAVwdl245BIP4X4DcZUeAPGDgLijFVYUMBg89pYLNK9WXLSw+VZ1RrZJmeKqvZwwmBzCvirPTmoxe6TMqUuWpF9L6+j0f4M/n4/4Iw/Gq0+H/7R2v8Awv1e7jtdK+NPhcafprTSNHG/jPwe93rOhQZKtEGvNHuvFFpCJGiaa9msreJ3mljhl/0k+nVwHW4k8L8u4twVGVbGcCZs8TilCKlKORZ3GjgcwqWup2oY6jlFabipqnQhXqzjGEJVIdeJjeCkvsvX0e/42P6q6/x+OEKACgD5o/aV/ZK+Cn7VnhZfDvxU8N+bqVjHIPDfjbRHh03xp4WmkEmW0jWDBcLNZO0ryXGiatbaloN3N5dzcaZJeW9pc2/6r4V+M3Hng9m7zPg/NOTC4iUXmmQ4+M8VkWbwi46Y3AqpTcK8VCMaWPwVXC5jRhzUqWLjQq1qVS4VJU3eL9U9n/Xfc/nq+OX/AARo/aR8AajeX3wdvtC+NHhdJBLYR29/YeDvG9tEWd2W+0bX7+DRLhrRQiLcaT4kubm/YGWLSbRmFsv+lvh/9Obwt4jw1DD8b4fMOBM2cXDESq4bE55kFWdoxTw+Oy3D1MfTVZ8zdPGZXSpYdWhPGVknVfXHEwfxXi/vX3rX8DwGPwD/AMFRvh9H/wAI/pGi/tuaLZQqbdbHwbP8Z7vR1jt2eNY438JXN3pRhXe/keXIYnjdnh3RsWP6PLiP6I/Esv7SxuP8A8fXm/avEZ5T4Fo45zqqMnOUc5pUcYqjtH2nNFTjKKjUtJWV3oPW9L58t/x1LmlfsKf8FDPj/qlrdeKvh/8AFC8k8yQNr/xq8Tz6Q1gJnXz53Txzq4191dgHlWw027uJgu5YZCBWGM+kL9Gjw4wlWjk/EnCVCPLG2XcB5TTxqxDhF+zpxfD+CeXRcU3GDxOKo04N2c43Ye1ow2cfSK/yVj9Z/wBlb/gjX4A+G+qaf41/aJ8Qaf8AFfxDp8tpeaf4F0e2ubb4dWN7A0c5fW5dQjh1TxqiXCKIrG7s9E0SaETQ6tpGsQ3Iit/418X/AKcnEnFOExOQ+GWW4ng7LMTCtQxPEOOq0qvE+IoVFKmo4CGGlPCZDKVOTc8RRr4/HwqOE8HjcDUpOdTnqYly0guVd3v8u34s+Bv+CzHxe0/xj+0R4X+EegNAugfArwdDpElrZm3FjZ+KfF6afrOsWtlFa/ubeKz0Cy8H6bLbgI1teWFzaNFF9nAP9GfQZ4KxOR+GWbcaZkqjzLxCzyeNjVrqq8RXyjJJYnA4KtXnW9+pOvmNfO8VCo+ZVaGIpVlOftGzbDRtBye8nf5LT87n9Bf7E/wluPgf+yt8FPhzqFs1nrWm+DbXWPElrKiLPaeJvF1zc+LvENjO0eRLJpmra5daYJNzborOMK2xVA/zY8euM6fH/i/x7xPhqqr4DFZ5WwOV1oOTp1spyWlSyXLcRTUtYRxeDy+ji3GytOvNtczbfHVlzVJPpey9FovyPqWvyIg/j9/4KFfAXxH+x3+1mvjj4eJeeGvC3izXovix8JNc06LybfQNds9Ut9T1nQbCQL9njn8JeJGjntLABlt/D+peHxMrCdgf9svo0+IuV+N/g0+H+JnRzXN8my6fBvGeX4qfPUzHLq+EqYTA5jiI39pKnnOVqVOtiG06uZYXMuRp00z0KM1Up2erS5ZLuuj+a/G5/S9+x/8AtPeFv2r/AILeHviTor2ll4iiij0j4geFobhJbjwt4vtYlGoWjRF2nGl6iR/amgXMwDXek3Vv5m28hvIIP8qvG3wmzfwc47zPhbHxrV8snOeN4bzedNwp5vklabeGrKfKqbxeG/3TMqUNKONpVOW9CdCpU46kHTk09t0+6/rc+pK/IjMKACgAoAKACgD5b/bA/ae8J/so/BfxF8RddntrjxHPbXOk/Dzww80K3nijxjc27rptqkDyxytpOnStHqXiO8iDmw0eC4eOOe9lsrO6/XfBPwmznxi47yzhjL6dWlldOrSxvE2bKE3QyjI6VRPFVZVIwlBYzFQUsLldCbisRjqlOMpU6EK9ejpTg6kkum7fZf1sfzO/sAfAPxV+2X+1kfHXj4T674V8M+J5Pi18Xtdv03w69q91q82sab4dmBTyZp/F/iIEXtmDCq+HLbXZoXSS3toZf9WPpIeI2T+Bvg3/AKvcOezy/OM2ymPBnBWX4aXLUy7BUcFTwWKzOHvc9OnkuWNPD12pt5pVy6FRSjVqzh2VZqnTstG1yxXZd/kvxsf2DV/iUeeFAHzP+1l+zF4M/ax+D+tfDDxW40zUN66v4M8WQ2sV1feEfFdpHIthqsEUhQ3FjOkkun63pyzW7ajpF1d28VzZ3f2S+tf1bwb8Wc98G+NsDxbk8Xi8NyvBZ7k0606OHzrJ60ovEYOpON1SxFOUYYnAYlwqrC42jRqzpV6PtsPWunN05cy+a7r+tj+VT4efEP8AaM/4Jm/tGaxY32jvYatYOml+M/BmqPP/AMIn8SPCfnvLYX1jfxIVmtZlL3/hnxNYI91pV089tcwOj63olx/sDxNwz4YfSt8MMDiMPjo4nBYmMsXkWe4SNP8AtnhbOfZxhiMPiMPOSdOrTaWGzbKcS40cZRjTq0qiksBj6Xe1CvBa+j6xf9br/gM/qf8A2Yf2wPgv+1d4Tg134deIraDxHb20L+J/h5q1zb23jHwveNDE86XWms6y6jpKyyGKz8R6bHPo9+UkjS4ivYLyytf8hfFnwT478Hc5qZfxPllWpldWrNZTxNgqVSrkeb0FOcacqWKScMLjHCKnXyvFSp47DqUZSpzoVKFetwzpypvVadGtn/XY+pK/IjMKACgAoA+W/wBp79sD4LfsoeFn1r4k+IYpfEV7aXE3hb4f6RJFdeL/ABTcRI4iW008MTp2lmdRDc+INU+y6TaMfL+0TXjQWc/674TeCXHfjHm8cBwtlk4ZZQrU4ZvxJjYTo5JlFOco87rYlr/acWqb56WW4T2uNrL3vZwoKpXp6QpyqPRadW9l/XY/lg+IfxD/AGjP+CmX7Rmj2Njo73+rX7vpfgzwZpbz/wDCJ/Dfwn56S399fX8qBYbWFQl/4m8TX6JdardJBbW0CImiaJb/AOvXDPDPhh9FLwwx2IxGOjhsFhoxxee57i40/wC2eKc59nKGHw+Hw8JN1KtRt4bKcpwzlRwdGVSrVqOTx+Pq9yUKEHr6vrJ/1sv+Cz+qv9k79mHwT+yd8ItI+GXhIjUtQLnVvGXiye1httR8XeKLpEF5qdysQJhsbZFTT9E09pZv7O0m2toJJ7q8N3e3X+P3jJ4s594yca43ivOU8LhlFYLI8mp1p1cLkuUUZN0MLSc3apiKsnLE5hiVCn9axlWrUjTo0FRw9HgqTdSXM/RLsv63PpivykgKACgD5n/ae/ZO+EX7WPgkeEvibo7jUNNF1P4T8ZaSUtfFHhHUbmExNc6ZeFGS5sZiIm1DRNQS50nUTBBJPbC7tbK7tf1bwm8ZONfBvPnnPCmNi8NinRp5zkeMUq2U51haVRTVLFUE1KliILnWGzDDSpYzC+0qRp1XRrV6Na4VJU3ePzXR/wBdz+ZH4+fsA/tZfsaeKj4+8CnxP4m8K6FO9/oXxe+E0mrWur6FCm8mbxFpujznxF4QnhhwLy9JufDjrMkMOu3EjzW0X+r/AIc/SQ8G/HLJ/wDVziD+ycpzjMaccNmHBXGUcFWwWY1JcvuZZisbTWWZ1TqTu6GHSpZonBznl9KMYVZ9sKtOorOyb3jLZ+nR/n5HrvwY/wCC0P7SHgG3tdL+KHh/wp8atKthCn26+H/CE+MXhhiWIQtr2hWN1okxIRXe6vfCN7fzTGSW4u5mfj4vjr6CnhdxHUrYvhLMs44DxlVzl9Xw/wDwvZHGpObm5rLswxFHH00m3GNHD51Qw0IKMKVGmo6zLDQfwtx/Ffc9fxPvDw9/wXL+AdzBG3iv4P8Axf0W5IPmw+Hm8F+J4EOwECO41LxJ4RklHmZUlrWEhAHwWPlj+d8z/Z+eI1KpJZPxtwTj6SfuTzNZ7lNSS5vtUsLledRg+Wzsq0/e929lzPJ4WfSUX63X6MPEX/Bcv4B20DN4T+D/AMX9auQG2ReIm8F+F4GIRSga403xH4vkQNIXViLVyqKrgOzmNDLP2fniNVqJZzxtwTgKV1zTyxZ7m1RLmd7UsVleSxk1HlaTqxvJuLcUlKQsLLrKK9Lv9EfB3xq/4LPftHfEC0u9I+F+geF/gtpV1HJC2paeX8YeM0jkZQfI13WbS10ezYxK0YmtPC8V7C0ry297FMkMkX9EcB/QV8L+G61HG8W5jm3HeMoyjNYXEqOSZFKUU7e0y/A1q2OrpTak4Vs3nQqKEYVaE4SqRntHDQWsm5fgvu/4J5P8Bf8Agnr+1n+2J4jT4h+OG17wn4W8S3kWo658W/ixLql5ruv2820yX+g6NqdwviTxbPJb4Nhdzyab4fuFVYR4ggChR9j4i/SW8GvBDK3wzw+suznN8qozwuX8GcGwwlDLsuqQvy4fMcdhKbyvJqcal1iKNOOKzKk25/2bUbbHOtTpqys2tox2Xq9l+fkf01fsxfsm/B/9k7wY/hT4YaM/9oamLWbxZ4z1dorvxX4uvrWIxxT6rfrHGkFjbl5m07RNPitdI05ri5lt7T7ZeX13df5R+LPjJxt4yZ7HOOLcdH6thHWhk2RYJTo5PkuHrT5p08Hh3KUqmIqqMFicfiZ1sbilTpQqVvYUMPRo8U6kqjvL5JbI+mK/KSAoAKACgAoAKAPlr4tfsT/srfHC4udQ+I3wU8G6lrV4zy3XiTR7W58I+J7qdk8tbi+8Q+EbnRNW1OSIBfLGp3V7Eu1VMTJlD+u8GePXi/wBTpYbhjj3PMLgKCUKOV46tSzrKaNNS5nTw+W51Sx+DwkZu/O8JRoTd21NSs1catSPwydu26+53R8Za9/wRY/Y+1e4km0/VPjN4Wjdyy2mg+NdBuLeJTjEcbeJ/BniO6KDBwZbmST5jmQ/Lt/dMu+nf424KlGnicHwNm8oxSdbMchzGlVm9fekspz3K6Kk768lKMdFaK1vqsTUX8r9U/0aDQv+CLH7H2kTCXUNU+M3ihAcm313xroNvCRnOC3hnwZ4duMHpxODgcEHJozD6d/jbjYOGGwfA2USt/Fy/IcxqzWm6Wa57mdK/XWm1fpbQHiaj/lXon+rZ9nfCb9ij9lb4IXVtqXw4+CXgzS9bspY7iy8R6va3Xi/xNY3MYGLjTvEXjC713WNLlJ+YnTLy0TJ4QAAD8L4y8efGDj+jVwvFHHue4zAV4SpV8rwVWjkuVYilLelissySjl+BxcEtF9aoVpW3k3dmUqtSW8nbtsvuVkfUlfkRAUAFABQAP/Z" id="b" width="96" height="96"/></defs></svg>`;

export default moonIcon;
