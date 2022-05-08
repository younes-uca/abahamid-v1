package  com.ird.faa.ws.rest.provided.facade.etudiant;

import com.ird.faa.service.etudiant.facade.PatientEtudiantService;

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
import com.ird.faa.bean.Patient;
import com.ird.faa.ws.rest.provided.converter.PatientConverter;
import com.ird.faa.ws.rest.provided.vo.PatientVo;

@Api("Manages patient services")
@RestController
@RequestMapping("api/etudiant/patient")
public class PatientRestEtudiant {

@Autowired
private PatientEtudiantService patientService;

@Autowired
private PatientConverter patientConverter;


            @ApiOperation("Updates the specified  patient")
            @PutMapping("/")
            public  PatientVo update(@RequestBody  PatientVo  patientVo){
            Patient patient = patientConverter.toItem(patientVo);
            patient = patientService.update(patient);
            return patientConverter.toVo(patient);
            }

    @ApiOperation("Finds a list of all patients")
    @GetMapping("/")
    public List<PatientVo> findAll(){
        return patientConverter.toVo(patientService.findAll());
    }

    @ApiOperation("Finds a patient with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public PatientVo findByIdWithAssociatedList(@PathVariable Long id){
    return patientConverter.toVo(patientService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search patient by a specific criteria")
    @PostMapping("/search")
    public List<PatientVo> findByCriteria(@RequestBody PatientVo patientVo){
        return patientConverter.toVo(patientService.findByCriteria(patientVo));
        }

            @ApiOperation("Finds a patient by id")
            @GetMapping("/id/{id}")
            public PatientVo findById(@PathVariable Long id){
            return patientConverter.toVo(patientService.findById(id));
            }

            @ApiOperation("Saves the specified  patient")
            @PostMapping("/")
            public PatientVo save(@RequestBody PatientVo patientVo){
            Patient patient = patientConverter.toItem(patientVo);
            patient = patientService.save(patient);
            return patientConverter.toVo(patient);
            }

            @ApiOperation("Delete the specified patient")
            @DeleteMapping("/")
            public int delete(@RequestBody PatientVo patientVo){
            Patient patient = patientConverter.toItem(patientVo);
            return patientService.delete(patient);
            }

            @ApiOperation("Deletes a patient by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return patientService.deleteById(id);
            }
        @ApiOperation("find by ville code")
        @GetMapping("/ville/code/{code}")
        public List<Patient> findByVilleCode(@PathVariable String code){
        return patientService.findByVilleCode(code);
        }

        @ApiOperation("delete by ville code")
        @DeleteMapping("/ville/code/{code}")
        public int deleteByVilleCode(@PathVariable String code){
        return patientService.deleteByVilleCode(code);
        }

        @ApiOperation("find by ville id")
        @GetMapping("/ville/id/{id}")
        public List<Patient> findByVilleId(@PathVariable Long id){
        return patientService.findByVilleId(id);
        }

        @ApiOperation("delete by ville id")
        @DeleteMapping("/ville/id/{id}")
        public int deleteByVilleId(@PathVariable Long id){
        return patientService.deleteByVilleId(id);
        }

        @ApiOperation("find by sexe code")
        @GetMapping("/sexe/code/{code}")
        public List<Patient> findBySexeCode(@PathVariable String code){
        return patientService.findBySexeCode(code);
        }

        @ApiOperation("delete by sexe code")
        @DeleteMapping("/sexe/code/{code}")
        public int deleteBySexeCode(@PathVariable String code){
        return patientService.deleteBySexeCode(code);
        }

        @ApiOperation("find by sexe id")
        @GetMapping("/sexe/id/{id}")
        public List<Patient> findBySexeId(@PathVariable Long id){
        return patientService.findBySexeId(id);
        }

        @ApiOperation("delete by sexe id")
        @DeleteMapping("/sexe/id/{id}")
        public int deleteBySexeId(@PathVariable Long id){
        return patientService.deleteBySexeId(id);
        }



            }
