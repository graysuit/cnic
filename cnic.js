function gender(cnic)
{
	return (cnic.charAt(12) % 2 == 0 ? "Female" : "Male"); // female vs male = even vs odd
}

function locate(cnic)
{
    //var location = "Residence: "
    var location = ""
    var Province = cnic.charAt(0)
    var Division = cnic.charAt(1)
    var District = cnic.charAt(2)
    var Tehsil   = cnic.charAt(3)
    var Counsil  = cnic.charAt(4)
	
    if(Province == 1) 
	{ 
    	location += "KHYBER PAKHTUNKHWA,"
        if(Division == 1) 
		{ 
    		location += "BANNU,"
            if(District == 1) 
			{ 
    			location += "BANNU,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BANNU,"
                    else if(Counsil == 2) location += "DOMAIL,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "BANNU CANTONMENT,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "LUCKY MARWAT,"
                    else if(Counsil == 2) location += "SARAI NORANG,"
				}
			}
        }
		else if(Division == 2) 
		{ 
    		location += "DERA ISMAIL KHAN,"
            if(District == 1) 
			{ 
    			location += "DERA ISMAIL KHAN,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "DERA ISMAIL KHAN,"
                    else if(Counsil == 2) location += "KULACHI,"
                    else if(Counsil == 3) location += "PAHARRPUR,"
                    else if(Counsil == 4) location += "DARABIN,"
                    else if(Counsil == 5) location += "PERWA,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "TAANK,"
                if(Tehsil == 0) 
				{ 
    				location += "TAANK,"
                    if(Counsil == 1) location += "TAANK,"
				}
			}
        }
		else if(Division == 3) 
		{ 
    		location += "HAZARA,"
            if(District == 1) 
			{ 
    			location += "ABBOTTABAD,"
                if(Tehsil == 0) 
				{ 
    				location += "HAVELIAN,"
                    if(Counsil == 1) location += "BANDA,"
                    else if(Counsil == 2) location += "SEER GARHI,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "BATAGRAM,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "ELAI,"
                    else if(Counsil == 2) location += "KOOZA BANDA,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "HARIPUR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "GHAZI,"
                    else if(Counsil == 2) location += "KOT NAJEEBULLAH,"
				}
            }
			else if(District == 4) 
			{ 
    			location += "KOHISTAN,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "DASO,"
                    else if(Counsil == 2) location += "KOLAYE PALS,"
                    else if(Counsil == 3) location += "PATAN,"
				}
            }
			else if(District == 5) 
			{ 
    			location += "MANSEHRA,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BALAKOT,"
                    else if(Counsil == 2) location += "KALA DHAKA,"
                    else if(Counsil == 3) location += "BAFA,"
                    else if(Counsil == 4) location += "AUGI,"
				}
			}
        }
		else if(Division == 4) 
		{ 
    		location += "KOHAT,"
            if(District == 1) 
			{
                if(Tehsil == 0) 
				{ 
    				location += "HANGU,"
                    if(Counsil == 1) location += "HANGU,"
                    else if(Counsil == 2) location += "TAL,"
				}
            }
			else if(District == 2) 
			{
                if(Tehsil == 0) 
				{ 
    				location += "KARAK,"
                    if(Counsil == 1) location += "BANDA DAUD SHAH,"
                    else if(Counsil == 2) location += "KARAK,"
                    else if(Counsil == 3) location += "TAKHT NUSRATI,"
				}
			}
            
			else if(District == 3) 
			{
                if(Tehsil == 0) 
				{ 
    				location += "KOHAT,"
                    if(Counsil == 1) location += "KOHAT,"
                    else if(Counsil == 2) location += "LAACHI,"
				}
			}
        }
		else if(Division == 5) 
		{ 
    		location += "MALAKAND,"
            if(District == 0) location += "DEER,"
            else if(District == 1) 
			{ 
    			location += "BUNER,"
                if(Tehsil == 0) 
				{ 
    				location += "BUNER,"
                    if(Counsil == 1) location += "DAGAR,"
                    else if(Counsil == 2) location += "GAGARAH,"
                    else if(Counsil == 3) location += "TOTALAYE,"
                    else if(Counsil == 4) location += "MANDNARH,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "LOWER CHITRAL,"
                if(Tehsil == 0) 
				{ 
    				location += "LOWER CHITRAL,"
                    if(Counsil == 1) location += "CHITRAL,"
                    else if(Counsil == 2) location += "MASTUJ,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "LOWER DEER,"
                if(Tehsil == 0) 
				{ 
    				location += "LOWER DIR,"
                    if(Counsil == 1) location += "KHALL,"
                    else if(Counsil == 2) location += "TEMARGARA,"
                    else if(Counsil == 3) location += "SAMAR BAGH,"
                    else if(Counsil == 4) location += "MUNDA,"
                    else if(Counsil == 5) location += "LAL QILA,"
                    else if(Counsil == 6) location += "BALAMBAT,"
                    else if(Counsil == 7) location += "AUDN ZAI,"
				}
            }
			else if(District == 4) 
			{ 
    			location += "MALAKAND,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "DARGAI,"
                    else if(Counsil == 2) location += "BUTT KHELA,"
				}
            }
			else if(District == 5) 
			{ 
    			location += "SHANGLA,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "ALPURI,"
                    else if(Counsil == 2) location += "BASHAAM,"
                    else if(Counsil == 3) location += "CHAKESAR,"
                    else if(Counsil == 4) location += "MARTOANG,"
                    else if(Counsil == 5) location += "PURAN,"
				}
            }
			else if(District == 6) { 
    			location += "SWAT,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "MATTA,"
                    else if(Counsil == 2) location += "MINGORA,"
                    else if(Counsil == 3) location += "BREKOT,"
                    else if(Counsil == 4) location += "KABL,"
                    else if(Counsil == 5) location += "KHAWAZA KHAILA,"
                    else if(Counsil == 6) location += "CHARBAGH,"
                    else if(Counsil == 7) location += "BABU ZAI,"
				}
            }
			else if(District == 7) 
			{ 
    			location += "UPPER DIR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "JABAR,"
                    else if(Counsil == 2) location += "WARHI,"
                    else if(Counsil == 3) location += "KALKOT,"
                    else if(Counsil == 4) location += "BRAWAL,"
                    else if(Counsil == 5) location += "KHAL,"
				}
			}
        }
		else if(Division == 6) 
		{ 
    		location += "MARDAN,"
            if(District == 1) 
			{ 
    			location += "MARDAN,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "MARDAN,"
                    else if(Counsil == 2) location += "TAKHT BHAI,"
                    else if(Counsil == 3) location += "KATLANG,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "SWABI,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "LAHOR,"
                    else if(Counsil == 2) location += "SWABI,"
                    else if(Counsil == 3) location += "TOPI,"
                    else if(Counsil == 4) location += "RAZRR,"
				}
			}
        }
		else if(Division == 7) 
		{ 
    		location += "PESHAWAR,"
            if(District == 1) 
			{ 
    			location += "CHARSADDA,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "CHARSADDA,"
                    else if(Counsil == 2) location += "TANGI,"
                    else if(Counsil == 3) location += "SHAHQADAR,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "NOWSHERA,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "NOWSHERA,"
                    else if(Counsil == 2) location += "PABBI,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "PESHAWAR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "KHAIL,"
			    }
			}
		}
    }
	else if(Province == 2) 
	{ 
    	location += "FATA,"
        if(Division == 1) 
		{ 
    		location += "AGENCY,"
            if(District == 1) 
			{ 
    			location += "BAJOUR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BAR CHAMAR KAND,"
                    else if(Counsil == 2) location += "BARANG,"
                    else if(Counsil == 3) location += "KHAAR,"
                    else if(Counsil == 4) location += "MAMOND,"
                    else if(Counsil == 5) location += "NAWAGAI,"
                    else if(Counsil == 6) location += "SALAARZAI,"
                    else if(Counsil == 7) location += "UTMAANKHAIL,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "KHYBER,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BARHA,"
                    else if(Counsil == 2) location += "JAMROD,"
                    else if(Counsil == 3) location += "LANDI KOTAL,"
                    else if(Counsil == 4) location += "MAULA GHAURI,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "KARAM,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "CENTRAL KARAM AGENCY,"
                    else if(Counsil == 2) location += "LOWER KARAM AGENCY,"
                    else if(Counsil == 3) location += "UPPER KARAM AGENCY,"
				}
            }
			else if(District == 4) { 
    			location += "MEHMAND,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "UTMAAN KHAIL (AMBER) {,"
                    else if(Counsil == 2) location += "HALEEMZAI,"
                    else if(Counsil == 3) location += "PINDIALA,"
                    else if(Counsil == 4) location += "PRINGHAR,"
                    else if(Counsil == 5) location += "SAFI,"
                    else if(Counsil == 6) location += "UPPER MEHMAND,"
                    else if(Counsil == 7) location += "YAKKA GHUND,"
				}
            }
			else if(District == 5) 
			{ 
    			location += "NARTH WAZIRISTAN,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "DITTA KHAIL,"
                    else if(Counsil == 2) location += "DOSLI,"
                    else if(Counsil == 3) location += "GARHOM,"
                    else if(Counsil == 4) location += "GHULAM KHAN,"
                    else if(Counsil == 5) location += "MIR ALI,"
                    else if(Counsil == 6) location += "MERAN SHAH,"
                    else if(Counsil == 7) location += "RAZMAK,"
                    else if(Counsil == 8) location += "SHIVA,"
                    else if(Counsil == 9) location += "SPAINWAAM,"
				}
            }
			else if(District == 6) 
			{ 
    			location += "ORAKZAI,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "CENTRAL,"
                    else if(Counsil == 2) location += "ISMAILZAI,"
                    else if(Counsil == 3) location += "LOWER,"
                    else if(Counsil == 4) location += "UPPER,"
				}
            }
			else if(District == 7) 
			{ 
    			location += "SOUTH WAZIRISTAN,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BARMAIL,"
                    else if(Counsil == 2) location += "LIDHA,"
                    else if(Counsil == 3) location += "MAKEN,"
                    else if(Counsil == 4) location += "SARAROGHA,"
                    else if(Counsil == 5) location += "SARWEEKAI,"
                    else if(Counsil == 6) location += "TIYARZA,"
                    else if(Counsil == 7) location += "TOI KHALA,"
                    else if(Counsil == 8) location += "WANA,"
				}
			}
        }
		else if(Division == 2) 
		{ 
    		location += "QABAILI ILAQA,"
            if(District == 1) 
			{ 
    			location += "LUCKY MARWAT,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "LUCKY MARWAT,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "BANNU,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BANNU,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "DERA ISMAIL KHAN,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "DERA ISMAIL KHAN,"
				}
			}
			else if(District == 4) 
			{ 
    			location += "KOHAT,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "KOHAT,"
				}
            }
			else if(District == 5) 
			{ 
    			location += "PESHAWER,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "PESHAWER,"
				}
            }
			else if(District == 6) 
			{ 
    			location += "TANK,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "TANK,"
				}
			}
		}
    }
	else if(Province == 3) 
	{ 
    	location += "PUNJAB,"
        if(Division == 1) 
		{ 
    		location += "BAHAWALPUR,"
            if(District == 1) 
			{ 
    			location += "BAHAWALNAGAR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BAHAWALNAGAR,"
                    else if(Counsil == 2) location += "CHISHTIAN,"
                    else if(Counsil == 3) location += "FORT ABBAS,"
                    else if(Counsil == 4) location += "HAROONABAD,"
                    else if(Counsil == 5) location += "MUNCHANABAD,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "BAHAWALPUR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "AHMEDPUR EAST,"
                    else if(Counsil == 2) location += "BAHALPUR,"
                    else if(Counsil == 3) location += "HASILPUR,"
                    else if(Counsil == 4) location += "KHAIRPUR TAMIWALI,"
                    else if(Counsil == 5) location += "YAZMAAN,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "RAHIM YAAR KHAN,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "KHAN PUR,"
                    else if(Counsil == 2) location += "LIAQUATPUR,"
                    else if(Counsil == 3) location += "RAHIM YAAR KHAN,"
                    else if(Counsil == 4) location += "SADIQABAD,"
				}
			}
        }
		else if(Division == 2) 
		{ 
    		location += "DERA GHAZI KHAN,"
            if(District == 1) 
			{ 
    			location += "DERA GHAZI KHAN,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BARTHI,"
                    else if(Counsil == 2) location += "DERA GHAZI KHAN,"
                    else if(Counsil == 3) location += "TONSA,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "LAYYAH,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "CHOBARAH,"
                    else if(Counsil == 2) location += "KAROORH LAL EESAN,"
                    else if(Counsil == 3) location += "LAYYAH,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "MUZAFFARGARH,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "ALIPUR,"
                    else if(Counsil == 2) location += "JATOI,"
                    else if(Counsil == 3) location += "KOT ADDU,"
                    else if(Counsil == 4) location += "MUZAFFARGARH,"
				}
            }
			else if(District == 4) 
			{ 
    			location += "RAJANPUR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "RAJAN PUR (QABAILI ILAQA) {,"
                    else if(Counsil == 2) location += "JAM PUR,"
                    else if(Counsil == 3) location += "RAJAN PUR,"
                    else if(Counsil == 4) location += "ROJHAAN,"
				}
			}
        }
		else if(Division == 3) 
		{ 
    		location += "FAISALABAD,"
            if(District == 1) 
			{ 
    			location += "FAISALABAD,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 0) location += "FAISLABAD,"
                    else if(Counsil == 1) location += "CHAK JHUMRA,"
                    else if(Counsil == 2) location += "FAISALABAD CITY,"
                    else if(Counsil == 3) location += "FAISALABAD SADAR,"
                    else if(Counsil == 4) location += "JARANWALA,"
                    else if(Counsil == 5) location += "SAMANDRI,"
                    else if(Counsil == 6) location += "TANDLIANWALA,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "JHANG,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "CHINIOT,"
                    else if(Counsil == 2) location += "JHANG,"
                    else if(Counsil == 3) location += "SHORKOT,"
                    else if(Counsil == 4) location += "AHMAD PUR SIAL,"
                    else if(Counsil == 5) location += "ATHARA HAZARI,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "TOBA TEK SINGH,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "GOJRA,"
                    else if(Counsil == 2) location += "KAMALIA,"
                    else if(Counsil == 3) location += "TOBA TEK SINGH,"
				}
            }
			else if(District == 4) 
			{ 
    			location += "CHINIOT,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "CHINIOT,"
                    else if(Counsil == 2) location += "LALIAN,"
                    else if(Counsil == 3) location += "BHAWANA,"
				}
			}
        }
		else if(Division == 4) 
		{ 
    		location += "GUJRANWALA,"
            if(District == 1) 
			{ 
    			location += "GUJRANWALA,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "GUJRANWALA,"
                    else if(Counsil == 2) location += "KAMOKI,"
                    else if(Counsil == 3) location += "NOWSHERA WARQA,"
                    else if(Counsil == 4) location += "WAZIRABAD,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "GUJRAT,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "JALALPUR JATAN,"
                    else if(Counsil == 2) location += "KHARIAN,"
                    else if(Counsil == 3) location += "SARAI ALAMGIR,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "HAFIZABAD,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "HAFIZABAD,"
                    else if(Counsil == 2) location += "PINDI BHATIAN,"
				}
            }
			else if(District == 4) 
			{ 
    			location += "MANDI BAHAUDDIN,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "MALIKWAL,"
                    else if(Counsil == 2) location += "MANDI BAHAUDDIN,"
                    else if(Counsil == 3) location += "PHALIA,"
				}
            }
			else if(District == 5) 
			{ 
    			location += "NAROWAL,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "NAROWAL,"
                    else if(Counsil == 2) location += "SHAKARGARH,"
                    else if(Counsil == 3) location += "ZAFARWAAL,"
				}
            }
			else if(District == 6) 
			{ 
    			location += "SIALKOT,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "DASKA,"
                    else if(Counsil == 2) location += "PASROOR,"
                    else if(Counsil == 3) location += "SIALKOT,"
                    else if(Counsil == 4) location += "SAMBARHYAL,"
				}
			}
        }
		else if(Division == 5) 
		{ 
    		location += "LAHORE,"
            if(District == 1) 
			{ 
    			location += "KASUR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "CHONIYA,"
                    else if(Counsil == 2) location += "KASUR,"
                    else if(Counsil == 3) location += "PATTOKI,"
                    else if(Counsil == 4) location += "KOT RADHA KISHAN,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "LAHORE,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 0) location += "MODEL TOWN,"
                    else if(Counsil == 1) location += "LAHORE CANTONMENT,"
                    else if(Counsil == 2) location += "LAHORE CITY,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "OKARA,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "DEPALPUR,"
                    else if(Counsil == 2) location += "OKARA,"
                    else if(Counsil == 3) location += "RENALA KHURD,"
				}
            }
			else if(District == 4) 
			{ 
    			location += "SHEIKHUPURA,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "FEROZWALA,"
                    else if(Counsil == 2) location += "NANKANA SAHIB,"
                    else if(Counsil == 3) location += "SAFDARABAD,"
                    else if(Counsil == 4) location += "SHEIKHUPURA,"
                    else if(Counsil == 5) location += "MUREEDKAY,"
				}
            }
			else if(District == 5) 
			{ 
    			location += "NANKANA SAHIB,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "NANKANA SAHIB,"
                    else if(Counsil == 2) location += "KOT SHAH,"
                    else if(Counsil == 3) location += "SANGLA HUL,"
                    else if(Counsil == 4) location += "SAFDARABAD,"
				}
			}
        }
		else if(Division == 6) 
		{ 
    		location += "MULTAN,"
            if(District == 1) 
			{ 
    			location += "KHANEWAL,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "JAHANIAN,"
                    else if(Counsil == 2) location += "KABEERWALA,"
                    else if(Counsil == 3) location += "KHANEWAL,"
                    else if(Counsil == 4) location += "MIAN CHUNNU,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "LODHRAN,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "DUNIYAPUR,"
                    else if(Counsil == 2) location += "PAKKA KAROORH,"
                    else if(Counsil == 3) location += "LODHRAN,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "MULTAN,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "JALALPUR PIRWALA,"
                    else if(Counsil == 2) location += "MULTAN CITY,"
                    else if(Counsil == 3) location += "MULTAN SADAR,"
                    else if(Counsil == 4) location += "SHUJABAD,"
				}
            }
			else if(District == 4) 
			{ 
    			location += "PAK PATTAN,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "ARIF WALA,"
                    else if(Counsil == 2) location += "PAK PATTAN,"
				}
            }
			else if(District == 5) 
			{ 
    			location += "SAHIWAL,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "CHICHAWATNI,"
                    else if(Counsil == 2) location += "SAHIWAL,"
				}
            }
			else if(District == 6) 
			{ 
    			location += "VEHARI,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BUREWALA,"
                    else if(Counsil == 2) location += "MAILSI,"
                    else if(Counsil == 3) location += "VEHARI,"
				}
			}
        }
		else if(Division == 7) 
		{ 
    		location += "RAWALPINDI,"
            if(District == 1) 
			{ 
    			location += "ATTOCK,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "ATTOCK,"
                    else if(Counsil == 2) location += "FATEH JANG,"
                    else if(Counsil == 3) location += "HASSAN ABDAAL,"
                    else if(Counsil == 4) location += "JAND,"
                    else if(Counsil == 5) location += "PINDI GHAIB,"
                    else if(Counsil == 6) location += "HAZRO,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "CHAKWAL,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "CHAKWAL,"
                    else if(Counsil == 2) location += "CHOA SAEEDAN SHAH,"
                    else if(Counsil == 3) location += "TALAGANG,"
                    else if(Counsil == 4) location += "KALAR KAHAR,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "JHELUM,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "JHELUM,"
                    else if(Counsil == 2) location += "PIND DADAN KHAN,"
                    else if(Counsil == 3) location += "SOHAWA,"
                    else if(Counsil == 4) location += "DINA,"
				}
            }
			else if(District == 4) 
			{ 
    			location += "RAWALPINDI,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "GOJAR KHAN,"
                    else if(Counsil == 2) location += "KAHUTA,"
                    else if(Counsil == 3) location += "KOTLI SATTIYAN,"
                    else if(Counsil == 4) location += "MURREE,"
                    else if(Counsil == 5) location += "RAWALPINDI,"
                    else if(Counsil == 6) location += "TAXILA,"
                    else if(Counsil == 7) location += "KALAR SYEDAN,"
				}
			}
        }
		else if(Division == 8) 
		{ 
    		location += "SARGODHA,"
            if(District == 1) 
			{ 
    			location += "BHAKKAR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BHAKKAR,"
                    else if(Counsil == 2) location += "DRIYA KHAN,"
                    else if(Counsil == 3) location += "KALOR KOT,"
                    else if(Counsil == 4) location += "MAKIRAH,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "KHUSHAB,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "JOHARABAD,"
                    else if(Counsil == 2) location += "NURPUR THAL,"
                    else if(Counsil == 3) location += "QAIDABAD,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "MIANWALI,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "EESA KHAI,"
                    else if(Counsil == 2) location += "MIANWALI,"
                    else if(Counsil == 3) location += "PIPLAAN,"
				}
            }
			else if(District == 4) 
			{ 
                location += "SARGODHA,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BHALWAAL,"
                    else if(Counsil == 2) location += "SAHIWAL,"
                    else if(Counsil == 3) location += "SARGODHA,"
                    else if(Counsil == 4) location += "SHAHPUR,"
                    else if(Counsil == 5) location += "SILANWALI,"
                    else if(Counsil == 6) location += "KOT MOMIN,"
				}
			}
		}
    }
	else if(Province == 4) 
	{ 
    	location += "SINDH,"
        if(Division == 1) 
		{ 
    		location += "HYDERABAD,"
            if(District == 1) 
			{ 
    			location += "BADEEN,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BADEEN,"
                    else if(Counsil == 2) location += "GOLARHCHI,"
                    else if(Counsil == 3) location += "MAATLI,"
                    else if(Counsil == 4) location += "TANDO BAAGO,"
                    else if(Counsil == 5) location += "TALHAAR,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "DADU,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "GOTH DADU,"
                    else if(Counsil == 2) location += "JOHI,"
                    else if(Counsil == 3) location += "KHAIRPUR NATAN SHAH,"
                    else if(Counsil == 4) location += "KOTRI,"
                    else if(Counsil == 5) location += "MEHARR,"
                    else if(Counsil == 6) location += "SEHOHAN SHARIF,"
                    else if(Counsil == 7) location += "THANO BOLA KHAN,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "HYDERABAD,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "HALA,"
                    else if(Counsil == 2) location += "HYDERABAD CITY,"
                    else if(Counsil == 3) location += "HYDERABAD,"
                    else if(Counsil == 4) location += "LATIFABAD,"
                    else if(Counsil == 5) location += "MATIYARI,"
                    else if(Counsil == 6) location += "QASIMABAD,"
                    else if(Counsil == 7) location += "TANDO ALLAH YAAR,"
                    else if(Counsil == 8) location += "TANDO MUHAMMAD KHAN,"
			    }
            }
			else if(District == 4) 
			{ 
    			location += "THATTA,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "GHORHABARHI,"
                    else if(Counsil == 2) location += "JAATI,"
                    else if(Counsil == 3) location += "KETI BANDAR,"
                    else if(Counsil == 4) location += "KAROW CHAN,"
                    else if(Counsil == 5) location += "MIRPUR BATHORO,"
                    else if(Counsil == 6) location += "MIRPUR SAAKRO,"
                    else if(Counsil == 7) location += "SHAH BANDAR,"
                    else if(Counsil == 8) location += "SAJAWAL,"
                    else if(Counsil == 9) location += "THATTA,"
				}
            }
			else if(District == 5) 
			{ 
    			location += "JAMSHORO,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 4) location += "KOTRHI,"
                    else if(Counsil == 5) location += "MNJHND,"
                    else if(Counsil == 6) location += "SEHOHAN SHARIF,"
                    else if(Counsil == 7) location += "THANO BOLA KHAN,"
				}
            }
			else if(District == 6) 
			{ 
    			location += "TANDO MUHAMMAD KHAN,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "TANDO MUHAMMAD KHAN,"
                    else if(Counsil == 2) location += "BULRREY SHAH KAREEM,"
                    else if(Counsil == 3) location += "TANDO GHULAM HAIDER,"
				}
            }
			else if(District == 7) 
			{ 
    			location += "TANDO ALLAHIAR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "TANDO ALLAHIAR,"
                    else if(Counsil == 2) location += "CHEMBERR,"
                    else if(Counsil == 3) location += "JHANDO MURREE,"
				}
            }
			else if(District == 8) 
			{ 
    			location += "MATIYARI,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BHAT SHAH,"
                    else if(Counsil == 2) location += "HALA,"
                    else if(Counsil == 3) location += "SAEEDABAD,"
				}
			}
        }
		else if(Division == 2) 
		{ 
		    location += "KARACHI,"
            if(District == 0)      location += "KORANGI,"
            else if(District == 1) location += "KARACHI WASTI,"
            else if(District == 2) location += "KARACHI SHARKI,"
            else if(District == 3) location += "KARACHI SOUTH,"
            else if(District == 4) location += "KARACHI GHARBI,"
            else if(District == 5) location += "MALEER,"
        }
		else if(Division == 3) 
		{ 
    		location += "LARKANA,"
            if(District == 1) 
			{ 
    			location += "JACOBABAD,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "GARHI KHAIRU,"
                    else if(Counsil == 2) location += "JACOBABAD,"
                    else if(Counsil == 3) location += "KANDHKOT,"
                    else if(Counsil == 4) location += "KASHMOR,"
                    else if(Counsil == 5) location += "THAL,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "LARKANA,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "DOKRI,"
                    else if(Counsil == 2) location += "QAMBAR,"
                    else if(Counsil == 3) location += "LARRKANO,"
                    else if(Counsil == 4) location += "MIRUKHAN,"
                    else if(Counsil == 5) location += "RATODERO,"
                    else if(Counsil == 6) location += "BAQRANI,"
                    else if(Counsil == 7) location += "WAARH,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "SHIKARPUR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "GARHI YAASEEN,"
                    else if(Counsil == 2) location += "KHANPUR,"
                    else if(Counsil == 3) location += "LUCKY,"
                    else if(Counsil == 4) location += "SHIKARPUR,"
				}
            }
			else if(District == 4) 
			{ 
    			location += "QAMBAR SHAHDADKOT,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "SAJAWAL JUNEJO,"
                    else if(Counsil == 2) location += "QAMBAR,"
                    else if(Counsil == 3) location += "NASEERABAD,"
                    else if(Counsil == 4) location += "MIRU KHAN,"
                    else if(Counsil == 5) location += "QABO SAEED KHAN,"
                    else if(Counsil == 6) location += "SHAHDAD KOT,"
                    else if(Counsil == 7) location += "WAARH,"
				}
            }
			else if(District == 5) 
			{ 
    			location += "KASHMOR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 2) location += "TANWATI,"
                    else if(Counsil == 3) location += "KUNDH KOT,"
                    else if(Counsil == 4) location += "KASHMOR,"
				}
			}
        }
		else if(Division == 4) 
		{ 
    		location += "MIRPUR KHAS,"
            if(District == 1) 
			{ 
    			location += "MIRPUR KHAS,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "DEGREE,"
                    else if(Counsil == 2) location += "KOT GHULAM MUHAMMAD,"
                    else if(Counsil == 3) location += "MIRPUR KHAS,"
                    else if(Counsil == 4) location += "KANRI,"
                    else if(Counsil == 5) location += "PATHORO,"
                    else if(Counsil == 6) location += "SAMARO,"
                    else if(Counsil == 7) location += "UMARKOT,"
                    else if(Counsil == 8) location += "JHADO,"
                    else if(Counsil == 9) location += "SINDHRI,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "SANGHAR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "JAAM NAWAZ ALI,"
                    else if(Counsil == 2) location += "KUPRO,"
                    else if(Counsil == 3) location += "SANGHAR,"
                    else if(Counsil == 4) location += "SHAHDADPUR,"
                    else if(Counsil == 5) location += "SANJHORO,"
                    else if(Counsil == 6) location += "TANDO ADAM KHAN,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "THARPARKAR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "CHARCHRO,"
                    else if(Counsil == 2) location += "DEPLO,"
                    else if(Counsil == 3) location += "MATTI,"
                    else if(Counsil == 4) location += "NANGAR PARKAR,"
				}
            }
			else if(District == 4) 
			{ 
    			location += "UMARKOT,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "UMARKOT,"
                    else if(Counsil == 2) location += "SAMARO,"
                    else if(Counsil == 3) location += "PATHORO,"
                    else if(Counsil == 4) location += "KENRI,"
				}
			}
        }
		else if(Division == 5) 
		{ 
    		location += "SUKKUR,"
            if(District == 1) 
			{ 
    			location += "GHOTKI,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "DHARKI,"
                    else if(Counsil == 2) location += "GHOTKI,"
                    else if(Counsil == 3) location += "KHAN GABARH,"
                    else if(Counsil == 4) location += "MIRPUR MATHELO,"
                    else if(Counsil == 5) location += "OBHARO,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "KHAIRPUR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "FAIZ GANJ,"
                    else if(Counsil == 2) location += "GAMBAT,"
                    else if(Counsil == 3) location += "KHAIRPUR,"
                    else if(Counsil == 4) location += "KANGRI,"
                    else if(Counsil == 5) location += "KOT DHAJI,"
                    else if(Counsil == 6) location += "THARI MIRWAH,"
                    else if(Counsil == 7) location += "NARO,"
                    else if(Counsil == 8) location += "SOBHODERO,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "NOSHERO FEROZ,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BARRIA,"
                    else if(Counsil == 2) location += "KUNDIYARO,"
                    else if(Counsil == 3) location += "MORO,"
                    else if(Counsil == 4) location += "NOSHERO FEROZ,"
                    else if(Counsil == 5) location += "MEHRABPUR,"
				}
            }
			else if(District == 4) 
			{ 
    			location += "SHAHEED BENAZIRABAD,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "QAZI AHMAD,"
                    else if(Counsil == 2) location += "NAWAB SHAH,"
                    else if(Counsil == 3) location += "SAKRAND,"
                    else if(Counsil == 4) location += "DAUR,"
				}
            }
			else if(District == 5) 
			{ 
    			location += "SUKKUR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "PANO AKIL,"
                    else if(Counsil == 2) location += "ROHRHI,"
                    else if(Counsil == 3) location += "SALEH PAT,"
                    else if(Counsil == 4) location += "SUKKUR CITY,"
                    else if(Counsil == 5) location += "NEW SUKKUR,"
				}
			}
		}
    }
	else if(Province == 5) 
	{ 
    	location += "BALOCHISTAN,"
        if(Division == 1) 
		{ 
    		location += "KALAT,"
            if(District == 1) 
			{ 
    			location += "AWARAN,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "AWARAN,"
                    else if(Counsil == 2) location += "MASHKAI,"
                    else if(Counsil == 3) location += "JHAL JHAO,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "KALAT,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "KALAT,"
                    else if(Counsil == 2) location += "SORAB,"
                    else if(Counsil == 3) location += "MANGCHAR,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "WASHUK,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "KHAARAAN,"
                    else if(Counsil == 2) location += "MASHJAIL,"
                    else if(Counsil == 3) location += "BASEMA,"
				}
            }
			else if(District == 4) 
			{ 
    			location += "KHUZDAR,"
                if(Tehsil == 0) {
                    if(Counsil == 1) location += "KHUZDAR,"
                    else if(Counsil == 2) location += "NAL,"
                    else if(Counsil == 3) location += "WADH,"
                    else if(Counsil == 4) location += "ZUHRI,"
				}
            }
			else if(District == 5) 
			{ 
    			location += "HUB,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "LASBELA,"
                    else if(Counsil == 2) location += "DARIJI,"
                    else if(Counsil == 3) location += "HUB,"
                    else if(Counsil == 4) location += "KANRAJ,"
                    else if(Counsil == 5) location += "OTHAL,"
                    else if(Counsil == 6) location += "LAKHARHA,"
                    else if(Counsil == 7) location += "SOUNMIYANI,"
                    else if(Counsil == 8) location += "GADANI,"
				}
            }
			else if(District == 6) 
			{ 
    			location += "MASTUNG,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "DASHT,"
                    else if(Counsil == 2) location += "MASTUNG,"
				}
			}
        }
		else if(Division == 2) 
		{ 
    		location += "MAKRAN,"
            if(District == 1) 
			{ 
    			location += "GAWADAR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "GAWADAR,"
                    else if(Counsil == 2) location += "PASNI,"
                    else if(Counsil == 3) location += "JEVANI,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "KECH,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BALIDAH,"
                    else if(Counsil == 2) location += "DASHT,"
                    else if(Counsil == 3) location += "TURBAT,"
                    else if(Counsil == 4) location += "TAMP,"
                    else if(Counsil == 5) location += "MAND,"
				}
            }
			else if(District == 3) location += "PANJGUR,"
        }
		else if(Division == 3) 
		{ 
    		location += "NASEERABAD,"
            if(District == 1) 
			{ 
    			location += "KACHI,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BHAAG,"
                    else if(Counsil == 2) location += "DHADAR,"
                    else if(Counsil == 3) location += "MACHA,"
                    else if(Counsil == 4) location += "SUNNI,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "JAFFARABAD,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "JHAT PAT,"
                    else if(Counsil == 2) location += "OSTA MUHAMAD,"
                    else if(Counsil == 3) location += "SOHBATPUR,"
                    else if(Counsil == 4) location += "GANDAKHA,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "JHAL MAGSI,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "GANDAVAH,"
                    else if(Counsil == 2) location += "JHAL MAGSI,"
                    else if(Counsil == 3) location += "KACHI BHAAG,"
                    else if(Counsil == 4) location += "KACHI SUNNI,"
                    else if(Counsil == 5) location += "KACHI MACHA,"
                    else if(Counsil == 6) location += "KACHI DHADR,"
				}
            }
			else if(District == 4) 
			{ 
    			location += "NASEERABAD,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "CHATTAR,"
                    else if(Counsil == 2) location += "DERA MURAD JAMALI,"
                    else if(Counsil == 3) location += "JHAT PAT,"
                    else if(Counsil == 4) location += "OSTA MUHAMMAD,"
                    else if(Counsil == 5) location += "TAMBO,"
				}
			}
        }
		else if(Division == 4) 
		{ 
    		location += "QUETTA,"
            if(District == 1) 
			{ 
    			location += "CHAGHI,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "DALBANDIN,"
                    else if(Counsil == 2) location += "NUSHKI,"
                    else if(Counsil == 3) location += "TAFTAN,"
                    else if(Counsil == 4) location += "NOKANDI,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "QILA ABDULLAH,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "CHAMAN,"
                    else if(Counsil == 2) location += "GUISTAN,"
                    else if(Counsil == 3) location += "QILA ABDULLAH,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "PISHIN,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BARSHORE,"
                    else if(Counsil == 2) location += "KARIZAAT,"
                    else if(Counsil == 3) location += "PISHIN,"
                    else if(Counsil == 4) location += "SIRANAN,"
                    else if(Counsil == 5) location += "HARAMZAI,"
				}
            }
			else if(District == 4) 
			{ 
    			location += "QUETTA,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 0) location += "QUETTA SADAR,"
                    else if(Counsil == 1) location += "QUETTA CITY,"
                    else if(Counsil == 2) location += "PANJPAI,"
                    else if(Counsil == 3)  location += "DASHT,"
				}
            }
		    else if(District == 5) location += "NUSHKI,"
					
        }
		else if(Division == 5) 
		{ 
    		location += "SIBBI,"
            if(District == 1) 
			{ 
    			location += "DERA BUGTI,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "DERA BUGTI,"
                    else if(Counsil == 2) location += "PHAILOGH,"
                    else if(Counsil == 3) location += "SUI,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "KOHLU,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "KAHAAN,"
                    else if(Counsil == 2) location += "KOHLU,"
                    else if(Counsil == 3) location += "MAUND,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "SIBBI,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "HARNAI,"
                    else if(Counsil == 2) location += "KOHLU,"
                    else if(Counsil == 3) location += "SIBBI,"
                    else if(Counsil == 5) location += "LEHRHI,"
				}
            }
		    else if(District == 4) 
			{ 
    			location += "ZIARAT,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "ZIARAT,"
                    else if(Counsil == 2) location += "SANJAVI,"
				}
            }
			else if(District == 5) 
			{ 
    			location += "HARNAI,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "HARNAI,"
                    else if(Counsil == 2) location += "SHARAG,"
				}
			}
        }
		else if(Division == 6) 
		{ 
    		location += "ZHOB,"
            if(District == 1) 
			{ 
    			location += "BARKHAN,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BARKHAN,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "QILA SAIFULLAH,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "QILA SAIFULLAH,"
                    else if(Counsil == 2) location += "MUSIM BAGH,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "LORALAI,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "DAKKI,"
                    else if(Counsil == 2) location += "LORALAI,"
                    else if(Counsil == 3) location += "BARKHAN,"
                    else if(Counsil == 4) location += "MUSA KHAIL,"
				}
            }
			else if(District == 4) 
			{ 
    			location += "MUSAKHAIL,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "MUSAKHAIL,"
                    else if(Counsil == 2) location += "KANGRI,"
				}
            }
			else if(District == 5) 
			{ 
    			location += "ZHOB,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "QAMAR DIN KAREZ,"
                    else if(Counsil == 2) location += "SHERANI,"
                    else if(Counsil == 3) location += "ZHOB,"
				}
            }
			else if(District == 6) 
			{ 
    			location += "ZHOB,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "SHERANI,"
				}
			}
		}
    }
	else if(Province == 6) location += "ISLAMABAD,"
    else if(Province == 7) 
	{ 
	    location += "GILGIT,"
        if(Division == 1) 
		{
            if(District == 1) 
			{ 
    			location += "BALTISTAN,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "KARMANG,"
                    else if(Counsil == 2) location += "SHAGAR,"
                    else if(Counsil == 3) location += "SKARDU,"
                    else if(Counsil == 4) location += "RONADO,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "DIAMER,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "ASTOOR,"
                    else if(Counsil == 2) location += "CHALAS,"
                    else if(Counsil == 3) location += "TANGEER,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "GHANCHAY,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "KHAPLO,"
                    else if(Counsil == 2) location += "MASHABAROM,"
				}
            }
			else if(District == 4) 
			{ 
    			location += "GHAZAR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "GOPAS,"
                    else if(Counsil == 2) location += "PANIAL,"
                    else if(Counsil == 4) location += "ASHOMAN,"
				}
            }
			else if(District == 5) 
			{ 
    			location += "HUNZA NAGAR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BASEN,"
                    else if(Counsil == 2) location += "HUNZA,"
                    else if(Counsil == 3) location += "NAGR,"
                    else if(Counsil == 4) location += "ALIABAD,"
                    else if(Counsil == 5) location += "GOJAAL,"
				}
            }
			else if(District == 6) location += "ASTOOR,"
		}
    }
	else if(Province == 8) 
	{ 
    	location += "AZAD KASHMIR,"
        if(Division == 1) 
		{ 
    		location += "MIRPUR,"
            if(District == 1) 
			{ 
    			location += "BHIMBER,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BARNALA,"
                    else if(Counsil == 2) location += "BHIMBER,"
                    else if(Counsil == 3) location += "SAMAHNI,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "KOTLI,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "FATEHPUR THAKIALA NAKIAAL,"
                    else if(Counsil == 2) location += "KOTLI,"
                    else if(Counsil == 3) location += "SEHANSA,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "MIRPUR,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "DUDYAAL,"
                    else if(Counsil == 2) location += "MIRPUR,"
				}
			}
        }
		else if(Division == 2) 
		{ 
    		location += "MUZAFFARABAD,"
            if(District == 1) 
			{ 
    			location += "BAGH,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "BAGH,"
                    else if(Counsil == 2) location += "DHEERKOT,"
                    else if(Counsil == 3) location += "HAVELI,"
				}
            }
			else if(District == 2) 
			{ 
    			location += "MUZAFFARABAD,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "ATHMUQAAM,"
                    else if(Counsil == 2) location += "HATTIYAN BALA,"
                    else if(Counsil == 3) location += "MUZAFFARABAD,"
				}
            }
			else if(District == 3) 
			{ 
    			location += "POONCH,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "ABBASPUR,"
                    else if(Counsil == 2) location += "HAJERA,"
                    else if(Counsil == 3) location += "RAWALAKOT,"
				}
            }
			else if(District == 4) 
			{ 
    			location += "SUDHANOTI,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "PLANDRI,"
                    else if(Counsil == 3) location += "BALOCH,"
				}
            }
			else if(District == 5) 
			{ 
    			location += "NEELUM,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "ATHMUQAAM,"
                    else if(Counsil == 2) location += "SHARDA,"
				}
            }
			else if(District == 6) 
			{ 
    			location += "HAVELI,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 2) location += "FORWARD KAHUTA,"
				}
            }
			else if(District == 7) 
			{ 
    			location += "HATTIYAN BALA,"
                if(Tehsil == 0) 
				{
                    if(Counsil == 1) location += "HATTIYAN BALA,"
                    else if(Counsil == 3) location += "CHAKAAR,"
				}
			}
		}
	}
	return location;				
}