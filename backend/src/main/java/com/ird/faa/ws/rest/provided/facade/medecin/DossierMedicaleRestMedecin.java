package  com.ird.faa.ws.rest.provided.facade.medecin;

import com.ird.faa.service.medecin.facade.DossierMedicaleMedecinService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ird.faa.bean.DossierMedicale;
import com.ird.faa.ws.rest.provided.converter.DossierMedicaleConverter;
import com.ird.faa.ws.rest.provided.vo.DossierMedicaleVo;

@Api("Manages dossierMedicale services")
@RestController
@RequestMapping("api/medecin/dossierMedicale")
public class DossierMedicaleRestMedecin {

@Autowired
private DossierMedicaleMedecinService dossierMedicaleService;

@Autowired
private DossierMedicaleConverter dossierMedicaleConverter;


            @ApiOperation("Updates the specified  dossierMedicale")
            @PutMapping("/")
            public  DossierMedicaleVo update(@RequestBody  DossierMedicaleVo  dossierMedicaleVo){
            DossierMedicale dossierMedicale = dossierMedicaleConverter.toItem(dossierMedicaleVo);
            dossierMedicale = dossierMedicaleService.update(dossierMedicale);
            return dossierMedicaleConverter.toVo(dossierMedicale);
            }

    @ApiOperation("Finds a list of all dossierMedicales")
    @GetMapping("/")
    public List<DossierMedicaleVo> findAll(){
        return dossierMedicaleConverter.toVo(dossierMedicaleService.findAll());
    }

    @ApiOperation("Finds a dossierMedicale with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public DossierMedicaleVo findByIdWithAssociatedList(@PathVariable Long id){
    return dossierMedicaleConverter.toVo(dossierMedicaleService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search dossierMedicale by a specific criteria")
    @PostMapping("/search")
    public List<DossierMedicaleVo> findByCriteria(@RequestBody DossierMedicaleVo dossierMedicaleVo){
        return dossierMedicaleConverter.toVo(dossierMedicaleService.findByCriteria(dossierMedicaleVo));
        }

            @ApiOperation("Finds a dossierMedicale by id")
            @GetMapping("/id/{id}")
            public DossierMedicaleVo findById(@PathVariable Long id){
            return dossierMedicaleConverter.toVo(dossierMedicaleService.findById(id));
            }

            @ApiOperation("Saves the specified  dossierMedicale")
            @PostMapping("/")
            public DossierMedicaleVo save(@RequestBody DossierMedicaleVo dossierMedicaleVo){
            DossierMedicale dossierMedicale = dossierMedicaleConverter.toItem(dossierMedicaleVo);
            dossierMedicale = dossierMedicaleService.save(dossierMedicale);
            return dossierMedicaleConverter.toVo(dossierMedicale);
            }

            @ApiOperation("Delete the specified dossierMedicale")
            @DeleteMapping("/")
            public int delete(@RequestBody DossierMedicaleVo dossierMedicaleVo){
            DossierMedicale dossierMedicale = dossierMedicaleConverter.toItem(dossierMedicaleVo);
            return dossierMedicaleService.delete(dossierMedicale);
            }

            @ApiOperation("Deletes a dossierMedicale by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return dossierMedicaleService.deleteById(id);
            }
        @ApiOperation("find by patient cin")
        @GetMapping("/patient/cin/{cin}")
        public List<DossierMedicale> findByPatientCin(@PathVariable String cin){
        return dossierMedicaleService.findByPatientCin(cin);
        }

        @ApiOperation("delete by patient cin")
        @DeleteMapping("/patient/cin/{cin}")
        public int deleteByPatientCin(@PathVariable String cin){
        return dossierMedicaleService.deleteByPatientCin(cin);
        }

        @ApiOperation("find by patient id")
        @GetMapping("/patient/id/{id}")
        public List<DossierMedicale> findByPatientId(@PathVariable Long id){
        return dossierMedicaleService.findByPatientId(id);
        }

        @ApiOperation("delete by patient id")
        @DeleteMapping("/patient/id/{id}")
        public int deleteByPatientId(@PathVariable Long id){
        return dossierMedicaleService.deleteByPatientId(id);
        }

        @ApiOperation("find by patientContact ref")
        @GetMapping("/patientContact/ref/{ref}")
        public List<DossierMedicale> findByPatientContactRef(@PathVariable String ref){
        return dossierMedicaleService.findByPatientContactRef(ref);
        }

        @ApiOperation("delete by patientContact ref")
        @DeleteMapping("/patientContact/ref/{ref}")
        public int deleteByPatientContactRef(@PathVariable String ref){
        return dossierMedicaleService.deleteByPatientContactRef(ref);
        }

        @ApiOperation("find by patientContact id")
        @GetMapping("/patientContact/id/{id}")
        public List<DossierMedicale> findByPatientContactId(@PathVariable Long id){
        return dossierMedicaleService.findByPatientContactId(id);
        }

        @ApiOperation("delete by patientContact id")
        @DeleteMapping("/patientContact/id/{id}")
        public int deleteByPatientContactId(@PathVariable Long id){
        return dossierMedicaleService.deleteByPatientContactId(id);
        }

        @ApiOperation("find by traitement id")
        @GetMapping("/traitement/id/{id}")
        public List<DossierMedicale> findByTraitementId(@PathVariable Long id){
        return dossierMedicaleService.findByTraitementId(id);
        }

        @ApiOperation("delete by traitement id")
        @DeleteMapping("/traitement/id/{id}")
        public int deleteByTraitementId(@PathVariable Long id){
        return dossierMedicaleService.deleteByTraitementId(id);
        }



            }
