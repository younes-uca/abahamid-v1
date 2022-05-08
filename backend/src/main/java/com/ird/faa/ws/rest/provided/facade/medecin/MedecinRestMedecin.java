package  com.ird.faa.ws.rest.provided.facade.medecin;

import com.ird.faa.service.medecin.facade.MedecinMedecinService;

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
import com.ird.faa.bean.Medecin;
import com.ird.faa.ws.rest.provided.converter.MedecinConverter;
import com.ird.faa.ws.rest.provided.vo.MedecinVo;

@Api("Manages medecin services")
@RestController
@RequestMapping("api/medecin/medecin")
public class MedecinRestMedecin {

@Autowired
private MedecinMedecinService medecinService;

@Autowired
private MedecinConverter medecinConverter;


            @ApiOperation("Updates the specified  medecin")
            @PutMapping("/")
            public  MedecinVo update(@RequestBody  MedecinVo  medecinVo){
            Medecin medecin = medecinConverter.toItem(medecinVo);
            medecin = medecinService.update(medecin);
            return medecinConverter.toVo(medecin);
            }

    @ApiOperation("Finds a list of all medecins")
    @GetMapping("/")
    public List<MedecinVo> findAll(){
        return medecinConverter.toVo(medecinService.findAll());
    }

    @ApiOperation("Finds a medecin with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public MedecinVo findByIdWithAssociatedList(@PathVariable Long id){
    return medecinConverter.toVo(medecinService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search medecin by a specific criteria")
    @PostMapping("/search")
    public List<MedecinVo> findByCriteria(@RequestBody MedecinVo medecinVo){
        return medecinConverter.toVo(medecinService.findByCriteria(medecinVo));
        }

            @ApiOperation("Finds a medecin by id")
            @GetMapping("/id/{id}")
            public MedecinVo findById(@PathVariable Long id){
            return medecinConverter.toVo(medecinService.findById(id));
            }

            @ApiOperation("Saves the specified  medecin")
            @PostMapping("/")
            public MedecinVo save(@RequestBody MedecinVo medecinVo){
            Medecin medecin = medecinConverter.toItem(medecinVo);
            medecin = medecinService.save(medecin);
            return medecinConverter.toVo(medecin);
            }

            @ApiOperation("Delete the specified medecin")
            @DeleteMapping("/")
            public int delete(@RequestBody MedecinVo medecinVo){
            Medecin medecin = medecinConverter.toItem(medecinVo);
            return medecinService.delete(medecin);
            }

            @ApiOperation("Deletes a medecin by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return medecinService.deleteById(id);
            }


            }
