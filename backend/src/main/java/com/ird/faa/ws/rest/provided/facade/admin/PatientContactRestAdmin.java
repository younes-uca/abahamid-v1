package  com.ird.faa.ws.rest.provided.facade.admin;

import com.ird.faa.service.admin.facade.PatientContactAdminService;

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
import com.ird.faa.bean.PatientContact;
import com.ird.faa.ws.rest.provided.converter.PatientContactConverter;
import com.ird.faa.ws.rest.provided.vo.PatientContactVo;

@Api("Manages patientContact services")
@RestController
@RequestMapping("api/admin/patientContact")
public class PatientContactRestAdmin {

@Autowired
private PatientContactAdminService patientContactService;

@Autowired
private PatientContactConverter patientContactConverter;


            @ApiOperation("Updates the specified  patientContact")
            @PutMapping("/")
            public  PatientContactVo update(@RequestBody  PatientContactVo  patientContactVo){
            PatientContact patientContact = patientContactConverter.toItem(patientContactVo);
            patientContact = patientContactService.update(patientContact);
            return patientContactConverter.toVo(patientContact);
            }

    @ApiOperation("Finds a list of all patientContacts")
    @GetMapping("/")
    public List<PatientContactVo> findAll(){
        return patientContactConverter.toVo(patientContactService.findAll());
    }

    @ApiOperation("Finds a patientContact with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public PatientContactVo findByIdWithAssociatedList(@PathVariable Long id){
    return patientContactConverter.toVo(patientContactService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search patientContact by a specific criteria")
    @PostMapping("/search")
    public List<PatientContactVo> findByCriteria(@RequestBody PatientContactVo patientContactVo){
        return patientContactConverter.toVo(patientContactService.findByCriteria(patientContactVo));
        }

            @ApiOperation("Finds a patientContact by id")
            @GetMapping("/id/{id}")
            public PatientContactVo findById(@PathVariable Long id){
            return patientContactConverter.toVo(patientContactService.findById(id));
            }

            @ApiOperation("Saves the specified  patientContact")
            @PostMapping("/")
            public PatientContactVo save(@RequestBody PatientContactVo patientContactVo){
            PatientContact patientContact = patientContactConverter.toItem(patientContactVo);
            patientContact = patientContactService.save(patientContact);
            return patientContactConverter.toVo(patientContact);
            }

            @ApiOperation("Delete the specified patientContact")
            @DeleteMapping("/")
            public int delete(@RequestBody PatientContactVo patientContactVo){
            PatientContact patientContact = patientContactConverter.toItem(patientContactVo);
            return patientContactService.delete(patientContact);
            }

            @ApiOperation("Deletes a patientContact by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return patientContactService.deleteById(id);
            }
        @ApiOperation("find by relation code")
        @GetMapping("/relation/code/{code}")
        public List<PatientContact> findByRelationCode(@PathVariable String code){
        return patientContactService.findByRelationCode(code);
        }

        @ApiOperation("delete by relation code")
        @DeleteMapping("/relation/code/{code}")
        public int deleteByRelationCode(@PathVariable String code){
        return patientContactService.deleteByRelationCode(code);
        }

        @ApiOperation("find by relation id")
        @GetMapping("/relation/id/{id}")
        public List<PatientContact> findByRelationId(@PathVariable Long id){
        return patientContactService.findByRelationId(id);
        }

        @ApiOperation("delete by relation id")
        @DeleteMapping("/relation/id/{id}")
        public int deleteByRelationId(@PathVariable Long id){
        return patientContactService.deleteByRelationId(id);
        }



            }
