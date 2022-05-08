package  com.ird.faa.ws.rest.provided.facade.etudiant;

import com.ird.faa.service.etudiant.facade.InfirmierEtudiantService;

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
import com.ird.faa.bean.Infirmier;
import com.ird.faa.ws.rest.provided.converter.InfirmierConverter;
import com.ird.faa.ws.rest.provided.vo.InfirmierVo;

@Api("Manages infirmier services")
@RestController
@RequestMapping("api/etudiant/infirmier")
public class InfirmierRestEtudiant {

@Autowired
private InfirmierEtudiantService infirmierService;

@Autowired
private InfirmierConverter infirmierConverter;


            @ApiOperation("Updates the specified  infirmier")
            @PutMapping("/")
            public  InfirmierVo update(@RequestBody  InfirmierVo  infirmierVo){
            Infirmier infirmier = infirmierConverter.toItem(infirmierVo);
            infirmier = infirmierService.update(infirmier);
            return infirmierConverter.toVo(infirmier);
            }

    @ApiOperation("Finds a list of all infirmiers")
    @GetMapping("/")
    public List<InfirmierVo> findAll(){
        return infirmierConverter.toVo(infirmierService.findAll());
    }

    @ApiOperation("Finds a infirmier with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public InfirmierVo findByIdWithAssociatedList(@PathVariable Long id){
    return infirmierConverter.toVo(infirmierService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search infirmier by a specific criteria")
    @PostMapping("/search")
    public List<InfirmierVo> findByCriteria(@RequestBody InfirmierVo infirmierVo){
        return infirmierConverter.toVo(infirmierService.findByCriteria(infirmierVo));
        }

            @ApiOperation("Finds a infirmier by id")
            @GetMapping("/id/{id}")
            public InfirmierVo findById(@PathVariable Long id){
            return infirmierConverter.toVo(infirmierService.findById(id));
            }

            @ApiOperation("Saves the specified  infirmier")
            @PostMapping("/")
            public InfirmierVo save(@RequestBody InfirmierVo infirmierVo){
            Infirmier infirmier = infirmierConverter.toItem(infirmierVo);
            infirmier = infirmierService.save(infirmier);
            return infirmierConverter.toVo(infirmier);
            }

            @ApiOperation("Delete the specified infirmier")
            @DeleteMapping("/")
            public int delete(@RequestBody InfirmierVo infirmierVo){
            Infirmier infirmier = infirmierConverter.toItem(infirmierVo);
            return infirmierService.delete(infirmier);
            }

            @ApiOperation("Deletes a infirmier by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return infirmierService.deleteById(id);
            }


            }
