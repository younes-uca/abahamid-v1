package  com.ird.faa.ws.rest.provided.facade.medecin;

import com.ird.faa.service.medecin.facade.EtudiantMedecinService;

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
import com.ird.faa.bean.Etudiant;
import com.ird.faa.ws.rest.provided.converter.EtudiantConverter;
import com.ird.faa.ws.rest.provided.vo.EtudiantVo;

@Api("Manages etudiant services")
@RestController
@RequestMapping("api/medecin/etudiant")
public class EtudiantRestMedecin {

@Autowired
private EtudiantMedecinService etudiantService;

@Autowired
private EtudiantConverter etudiantConverter;


            @ApiOperation("Updates the specified  etudiant")
            @PutMapping("/")
            public  EtudiantVo update(@RequestBody  EtudiantVo  etudiantVo){
            Etudiant etudiant = etudiantConverter.toItem(etudiantVo);
            etudiant = etudiantService.update(etudiant);
            return etudiantConverter.toVo(etudiant);
            }

    @ApiOperation("Finds a list of all etudiants")
    @GetMapping("/")
    public List<EtudiantVo> findAll(){
        return etudiantConverter.toVo(etudiantService.findAll());
    }

    @ApiOperation("Finds a etudiant with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public EtudiantVo findByIdWithAssociatedList(@PathVariable Long id){
    return etudiantConverter.toVo(etudiantService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search etudiant by a specific criteria")
    @PostMapping("/search")
    public List<EtudiantVo> findByCriteria(@RequestBody EtudiantVo etudiantVo){
        return etudiantConverter.toVo(etudiantService.findByCriteria(etudiantVo));
        }

            @ApiOperation("Finds a etudiant by id")
            @GetMapping("/id/{id}")
            public EtudiantVo findById(@PathVariable Long id){
            return etudiantConverter.toVo(etudiantService.findById(id));
            }

            @ApiOperation("Saves the specified  etudiant")
            @PostMapping("/")
            public EtudiantVo save(@RequestBody EtudiantVo etudiantVo){
            Etudiant etudiant = etudiantConverter.toItem(etudiantVo);
            etudiant = etudiantService.save(etudiant);
            return etudiantConverter.toVo(etudiant);
            }

            @ApiOperation("Delete the specified etudiant")
            @DeleteMapping("/")
            public int delete(@RequestBody EtudiantVo etudiantVo){
            Etudiant etudiant = etudiantConverter.toItem(etudiantVo);
            return etudiantService.delete(etudiant);
            }

            @ApiOperation("Deletes a etudiant by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return etudiantService.deleteById(id);
            }


            }
